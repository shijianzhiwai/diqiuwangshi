---
tags: 
  - Go
  - 编程
---

# 从 Go 在 macOS 下的一个小问题说起

## 实验环境

Go 版本：1.14.4

macOS 版本：10.15.5

## 从一段代码说起

请看下面 Go 代码：

```go
package main

import (
	"fmt"
	"time"
)

func main()  {
	fmt.Println(time.Now().UnixNano())
	fmt.Println(time.Now().UnixNano())
	fmt.Println(time.Now().UnixNano())
}
```

代码含义很简单，多次打印当前 unix nano 时间戳，对于输出结果，显而易见都是纳秒精度级别的时间戳：

```shell
1592724840627599000
1592724840627643000
1592724840627647000
```

本次分享的主题就是从这个结果中的一点小问题开始，为什么后三位都是 0 ？

首先我们需要搞明白这是语言的问题，还是系统的问题，于是我们使用 C 语言实现相同的功能：

```c
#include <stdio.h>
#include <sys/time.h>

struct timespec get_time(void);

int main ()
{
  	// 打印三次
    struct timespec tp1 = get_time();
    printf("%ld%ld\n", tp1.tv_sec, tp1.tv_nsec);
    
    struct timespec tp2 = get_time();
    printf("%ld%ld\n", tp1.tv_sec, tp2.tv_nsec);
    
    struct timespec tp3 = get_time();
    printf("%ld%ld\n", tp1.tv_sec, tp3.tv_nsec);
}

struct timespec get_time()
{
    struct timespec tp;
    clock_gettime(CLOCK_REALTIME, &tp);
    return tp;
}
```

输出结果：

```shell
1592727195527429000
1592727195527446000
1592727195527448000
```

看来并非是语言本身的问题，接下来我们探索其原因，先从 Go 入手，看看能不能找到相关的问题。

## 探索

通过 Google 发现，早在 2017 年 9 月的时候就已经有人在 go 项目的 github 提出此问题[^1]：“runtime: nanosecond precision lost since mac os x high sierra update” 。

看来这个问题是在 macOS High Sierra 版本中引入的。问题讨论中一个概念被提起：commpage。

## Commpage 和 vDSO

我们先了解两个概念：commpage 和 vDSO。

commpage 其实就是进程内存空间内的一段特殊内存区域，所有进程的地址均一样，64 位的 macOS 中起始地址为 `0x7fffffe00000` ，通过它我们可以干什么事情呢？看下面的 Go 代码：

```go
package main

import (
	"fmt"
	"unsafe"
)

func main()  {
	var s uintptr
	s = 0x7fffffe00000 + 0xd8
	ptr := (**int)(unsafe.Pointer(&s))
	fmt.Println(**ptr)
}
```

上面结果为：

```shell
1592734471
```

没错就是一个 unix 时间戳，内核会将一些信息填写到 commpage 地址处，其中偏移量为 0xd8[^2] 的地址处填写的就是时间戳，我们直接拿此地址的值就可以得到时间戳。这样比通过系统调用会更快，毕竟拿到时间戳只是读一下内存就好了，而系统调用却是一个很复杂的过程。在 Linux 上，类似的功能就是 vDSO[^3] 了。Go 就是通过这种方式运行 `time.Now()` 函数的，显然，苹果在新版本的系统中对此进行了更改。

## 对比一下 Go 相关代码的变化

我们找一个比较久的版本 1.8，从此分支的代码中[^4]我们看到 Go 自己通过 commpage 获取的时间戳：

```go
#define	gtod_sec_base	0x78 // 存放时间戳的偏移地址，这还是早期版本的偏移地址，现在这个地址已经没有值了
TEXT nanotime<>(SB), NOSPLIT, $32
	MOVQ	$0x7fffffe00000, BP	/* comm page base, commpage 起始地址*/
	// 省略 ...
	// 把时间戳挪到 R14 寄存器 gtod_sec_base(BP) 实际意思为 0x7fffffe00000 + 0x78
	MOVQ	gtod_sec_base(BP), R14 
	// 省略 ...
```

在最新的 1.14 分支的代码中[^5]：

```go
TEXT runtime·walltime_trampoline(SB),NOSPLIT,$0
	PUSHQ	BP			// make a frame; keep stack aligned
	MOVQ	SP, BP
	// DI already has *timeval
	XORL	SI, SI // no timezone needed
	CALL	libc_gettimeofday(SB)
	POPQ	BP
	RET
```

1.14 分支代码中 Go 已经去调用 libc 库中的 gettimeofday 函数了，（本质上 gettimeofday 也会使用 commpage 或者 vDSO，看来 Go 的开发者们不想自己维护这个轮子了，Linux 上 Go 还是 vDSO 方案）

在 Go 1.14 对 Linux 的时间获取相关代码[^6]中，注释中一眼就能看到 “VDSO” 的字样，Linux 中并不会通过 glibc 获取。

这里我们可以在 macOS 做一个不严谨的性能测试，运行 Go 标准库获取时间戳和 C 获取时间戳。

Go 标准库代码：

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	start := time.Now()
	for i := 0; i < 1000000; i++ {
		time.Now()
	}
	end := time.Now()
	fmt.Println(end.UnixNano() - start.UnixNano())
}
```

C 代码：

```c
#include <stdio.h>
#include <sys/time.h>

struct timespec get_time(void);

int main ()
{
    struct timespec start = get_time();
    int a = 0;
    for (; a < 1000000; a++) {
        get_time();
    }
    struct timespec end = get_time();

    printf("%ld\n", end.tv_nsec - start.tv_nsec);
}

struct timespec get_time()
{
    struct timespec tp;
    clock_gettime(CLOCK_REALTIME, &tp);
    return tp;
}
```

Go 1.14.4 执行时间约为：80000000 ns，C 执行时间约为：33000000 ns，如果 Go 代码使用 1.8 的版本执行时间则要高一个数量级，约为：411000000 ns。虽然新版本的 Go 走了 libc（不清楚是否通过 cgo，cgo 性能较弱，这里应该是有相关优化），但是性能还是强于老版本直接从 commpage 获取。

## 最后

话说回来，之所以 macOS 下后三位会丢失，我认为还是系统本身不再支持了，毕竟已经很久了，直到现在还是老样子。不过这么做是为了什么？缺失的三位是否可以补回呢？似乎可以通过 `mach_absolute_time` 调用计算出，详细参见 issues 22037[^1]。

感谢阅读。

[^1]:https://github.com/golang/go/issues/22037
[^2]:https://go-review.googlesource.com/c/go/+/67332/5/src/runtime/sys_darwin_amd64.s#124
[^3]:https://man7.org/linux/man-pages/man7/vdso.7.html
[^4]:https://github.com/golang/go/blob/release-branch.go1.8/src/runtime/sys_darwin_amd64.s#L111
[^5]:https://github.com/golang/go/blob/release-branch.go1.14/src/runtime/sys_darwin_amd64.s#L137
[^6]:https://github.com/golang/go/blob/dev.boringcrypto.go1.14/src/runtime/sys_linux_amd64.s#L209 