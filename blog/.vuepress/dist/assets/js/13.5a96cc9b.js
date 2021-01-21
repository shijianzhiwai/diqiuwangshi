(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{483:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"实验环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验环境"}},[t._v("#")]),t._v(" 实验环境")]),t._v(" "),a("p",[t._v("Go 版本：1.14.4")]),t._v(" "),a("p",[t._v("macOS 版本：10.15.5")]),t._v(" "),a("h2",{attrs:{id:"从一段代码说起"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从一段代码说起"}},[t._v("#")]),t._v(" 从一段代码说起")]),t._v(" "),a("p",[t._v("请看下面 Go 代码：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UnixNano")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UnixNano")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UnixNano")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("代码含义很简单，多次打印当前 unix nano 时间戳，对于输出结果，显而易见都是纳秒精度级别的时间戳：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1592724840627599000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1592724840627643000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1592724840627647000")]),t._v("\n")])])]),a("p",[t._v("本次分享的主题就是从这个结果中的一点小问题开始，为什么后三位都是 0 ？")]),t._v(" "),a("p",[t._v("首先我们需要搞明白这是语言的问题，还是系统的问题，于是我们使用 C 语言实现相同的功能：")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<sys/time.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("timespec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印三次")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("timespec")]),t._v(" tp1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%ld%ld\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tp1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tv_sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tp1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tv_nsec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("timespec")]),t._v(" tp2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%ld%ld\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tp1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tv_sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tp2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tv_nsec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("timespec")]),t._v(" tp3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%ld%ld\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tp1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tv_sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tp3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tv_nsec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("timespec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("timespec")]),t._v(" tp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clock_gettime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CLOCK_REALTIME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("tp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" tp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("输出结果：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1592727195527429000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1592727195527446000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1592727195527448000")]),t._v("\n")])])]),a("p",[t._v("看来并非是语言本身的问题，接下来我们探索其原因，先从 Go 入手，看看能不能找到相关的问题。")]),t._v(" "),a("h2",{attrs:{id:"探索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#探索"}},[t._v("#")]),t._v(" 探索")]),t._v(" "),a("p",[t._v("通过 Google 发现，早在 2017 年 9 月的时候就已经有人在 go 项目的 github 提出此问题"),a("a",{attrs:{href:"https://github.com/golang/go/issues/22037",target:"_blank",rel:"noopener noreferrer"}},[t._v("^1"),a("OutboundLink")],1),t._v("：“runtime: nanosecond precision lost since mac os x high sierra update” 。")]),t._v(" "),a("p",[t._v("看来这个问题是在 macOS High Sierra 版本中引入的。问题讨论中一个概念被提起：commpage。")]),t._v(" "),a("h2",{attrs:{id:"commpage-和-vdso"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commpage-和-vdso"}},[t._v("#")]),t._v(" Commpage 和 vDSO")]),t._v(" "),a("p",[t._v("我们先了解两个概念：commpage 和 vDSO。")]),t._v(" "),a("p",[t._v("commpage 其实就是进程内存空间内的一段特殊内存区域，所有进程的地址均一样，64 位的 macOS 中起始地址为 "),a("code",[t._v("0x7fffffe00000")]),t._v(" ，通过它我们可以干什么事情呢？看下面的 Go 代码：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unsafe"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uintptr")]),t._v("\n\ts "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x7fffffe00000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xd8")]),t._v("\n\tptr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pointer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上面结果为：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1592734471")]),t._v("\n")])])]),a("p",[t._v("没错就是一个 unix 时间戳，内核会将一些信息填写到 commpage 地址处，其中偏移量为 0xd8"),a("a",{attrs:{href:"https://go-review.googlesource.com/c/go/+/67332/5/src/runtime/sys_darwin_amd64.s#124",target:"_blank",rel:"noopener noreferrer"}},[t._v("^2"),a("OutboundLink")],1),t._v(" 的地址处填写的就是时间戳，我们直接拿此地址的值就可以得到时间戳。这样比通过系统调用会更快，毕竟拿到时间戳只是读一下内存就好了，而系统调用却是一个很复杂的过程。在 Linux 上，类似的功能就是 vDSO"),a("a",{attrs:{href:"https://man7.org/linux/man-pages/man7/vdso.7.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("^3"),a("OutboundLink")],1),t._v(" 了。Go 就是通过这种方式运行 "),a("code",[t._v("time.Now()")]),t._v(" 函数的，显然，苹果在新版本的系统中对此进行了更改。")]),t._v(" "),a("h2",{attrs:{id:"对比一下-go-相关代码的变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对比一下-go-相关代码的变化"}},[t._v("#")]),t._v(" 对比一下 Go 相关代码的变化")]),t._v(" "),a("p",[t._v("我们找一个比较久的版本 1.8，从此分支的代码中"),a("a",{attrs:{href:"https://github.com/golang/go/blob/release-branch.go1.8/src/runtime/sys_darwin_amd64.s#L111",target:"_blank",rel:"noopener noreferrer"}},[t._v("^4"),a("OutboundLink")],1),t._v("我们看到 Go 自己通过 commpage 获取的时间戳：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("#define\tgtod_sec_base\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x78")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存放时间戳的偏移地址，这还是早期版本的偏移地址，现在这个地址已经没有值了")]),t._v("\nTEXT nanotime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NOSPLIT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("\n\tMOVQ\t$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x7fffffe00000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BP\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* comm page base, commpage 起始地址*/")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 省略 ...")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把时间戳挪到 R14 寄存器 gtod_sec_base(BP) 实际意思为 0x7fffffe00000 + 0x78")]),t._v("\n\tMOVQ\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gtod_sec_base")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" R14 \n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 省略 ...")]),t._v("\n")])])]),a("p",[t._v("在最新的 1.14 分支的代码中"),a("a",{attrs:{href:"https://github.com/golang/go/blob/release-branch.go1.14/src/runtime/sys_darwin_amd64.s#L137",target:"_blank",rel:"noopener noreferrer"}},[t._v("^5"),a("OutboundLink")],1),t._v("：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("TEXT runtime·"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("walltime_trampoline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("NOSPLIT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\tPUSHQ\tBP\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// make a frame; keep stack aligned")]),t._v("\n\tMOVQ\tSP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BP\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DI already has *timeval")]),t._v("\n\tXORL\tSI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SI "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// no timezone needed")]),t._v("\n\tCALL\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("libc_gettimeofday")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tPOPQ\tBP\n\tRET\n")])])]),a("p",[t._v("1.14 分支代码中 Go 已经去调用 libc 库中的 gettimeofday 函数了，（本质上 gettimeofday 也会使用 commpage 或者 vDSO，看来 Go 的开发者们不想自己维护这个轮子了，Linux 上 Go 还是 vDSO 方案）")]),t._v(" "),a("p",[t._v("在 Go 1.14 对 Linux 的时间获取相关代码"),a("a",{attrs:{href:"https://github.com/golang/go/blob/dev.boringcrypto.go1.14/src/runtime/sys_linux_amd64.s#L209",target:"_blank",rel:"noopener noreferrer"}},[t._v("^6"),a("OutboundLink")],1),t._v("中，注释中一眼就能看到 “VDSO” 的字样，Linux 中并不会通过 glibc 获取。")]),t._v(" "),a("p",[t._v("这里我们可以在 macOS 做一个不严谨的性能测试，运行 Go 标准库获取时间戳和 C 获取时间戳。")]),t._v(" "),a("p",[t._v("Go 标准库代码：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tstart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ttime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tend "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UnixNano")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UnixNano")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("C 代码：")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<sys/time.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("timespec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("timespec")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("timespec")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%ld\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tv_nsec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tv_nsec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("timespec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("timespec")]),t._v(" tp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clock_gettime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CLOCK_REALTIME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("tp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" tp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Go 1.14.4 执行时间约为：80000000 ns，C 执行时间约为：33000000 ns，如果 Go 代码使用 1.8 的版本执行时间则要高一个数量级，约为：411000000 ns。虽然新版本的 Go 走了 libc（不清楚是否通过 cgo，cgo 性能较弱，这里应该是有相关优化），但是性能还是强于老版本直接从 commpage 获取。")]),t._v(" "),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),a("p",[t._v("话说回来，之所以 macOS 下后三位会丢失，我认为还是系统本身不再支持了，毕竟已经很久了，直到现在还是老样子。不过这么做是为了什么？缺失的三位是否可以补回呢？似乎可以通过 "),a("code",[t._v("mach_absolute_time")]),t._v(" 调用计算出，详细参见 issues 22037"),a("a",{attrs:{href:"https://github.com/golang/go/issues/22037",target:"_blank",rel:"noopener noreferrer"}},[t._v("^1"),a("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);