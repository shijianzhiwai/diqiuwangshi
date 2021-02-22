# My Rust All in One

主要是一些 Rust 语法记录，用于学习 Rust。
源于：[rust-by-example](https://doc.rust-lang.org/stable/rust-by-example/index.html)

[[toc]]

## Hello World

文档：[Module std::fmt](https://doc.rust-lang.org/std/fmt/)

```rust
// build: rustc main.rs
fn main() {
    println!("Hello World!");
    println!("{} {} {}", 123, "abc", 5.26666666); // 123 abc 5.26666666
    println!("{0}, {1}, {1}, {0}","a", "b"); // a, b, b, a

    // 命名参数
    println!("{a} {b} {c}", a="1", b="2", c="3"); // 1 2 3
    
    // 打印二进制 {:b}
    println!("{} {:b}", 100, 100); // 100 1100100

    println!("{number:>width$}", number=1, width=6); // (五个空格)     1
    println!("{number:>0width$}", number=1, width=6); // 000001

    // 打印结构体
    #[derive(Debug)] // 属性语法，编译器会自动生成此结构体 fmt::Debug 的 fmt 方法
    struct Structure(i32);
    println!("{:?}", Structure(3));

    // stderr
    eprintln!("{}\n", format!("{}", 123));
    // via {:x} https://doc.rust-lang.org/std/fmt/#formatting-traits

    #[derive(Debug)]
    struct Deep(Structure);
    println!("{:?} {:?} {1:?} {0:?} {actor:?}", 1, "2", actor="actor's"); // 1 "2" "2" 1 "actor\'s"
    println!("{:?}", Deep(Structure(7))); // Deep(Structure(7))

    #[derive(Debug)]
    struct Person<'a> {
        name: &'a str,
        age: u8
    }

    let name = "Peter";
    let age = 27;
    let peter = Person { name, age };

    // Pretty print
    println!("{:#?}", peter);
    // Person {
    //     name: "Peter",
    //     age: 27,
    // }

    // 手动实现结构体的 fmt::Display
    impl std::fmt::Display for Structure { // 也可以文件开始引用，这点和 C++ 一样：use std::fmt; 
        fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
            write!(f, "{}", self.0)
        }
    }
    println!("{}", Structure(123)); // 123

    // 问号为处理错误方式，语法糖，后面语法会介绍
    #[derive(Debug)]
    struct List(Vec<i32>);
    impl std::fmt::Display for List {
        fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
            let vec = &self.0;
            write!(f, "[")?;
            for (count, v) in vec.iter().enumerate() {
                if count != 0 { write!(f, ", ")?; }
                write!(f, "{}", v)?;
            }
    
            write!(f, "]")
        }
    }
    let v = List(vec![1, 2, 3]);
    println!("{} {:?} {:?}", v, v, v.0); // [1, 2, 3] List([1, 2, 3]) [1, 2, 3]
}
```

## Primitives

标量类型：

* 整数：i8, i16, i32, i64, i128 and isize (pointer size)
* 无符号整数：u8, u16, u32, u64, u128 and usize (pointer size)
* 浮点：f32, f64
* char 类型：'a', 'α' and '∞'（四个字节，Unicode）
* bool：true false
* unit 类型：empty tuple ()

复合类型：

* 数组：[1, 2, 3]
* 元祖 (1, true)

整形默认为 i32 浮点为 f64

```rust
fn main() {
    #![allow(unused_variables)] // 允许没有使用的 value
    #![allow(unused_assignments)] // 允许没有使用的赋值 否则编译器会 warn，但是编译会通过

    // 变量标注
    let logical: bool = true;
    let a_float: f64 = 1.0;
    // 后缀标注
    let an_integer   = 5i32;
    // 默认类型
    let default_float   = 3.0; // `f64`
    let default_integer = 7;   // `i32`

    // 类型推断，下一行 inferred_type 为 i64
    let mut inferred_type = 12;
    inferred_type = 4294967296i64;
    // mut 定义的变量可修改，无 mut 关键字定义不可修改
    let mut mutable = 12;
    mutable = 21;
    // 错误，类型不符合
    // mutable = true;
    // 可覆盖定义
    let mutable = true;

    // 数字可下划线
    println!("One million is written as {}", 1_000_000u32);
    // 不同进制，二进制、16进制
    println!("{:04b} {:04b}", 0b0011u32, 0x80u32);

    // tuple 类型可放多种类型，可以放入任意数量的值
    let long_tuple = (1u8, 2u16, 3u32, 4u64,
        -1i8, -2i16, -3i32, -4i64,
        0.1f32, 0.2f64,
        'a', true);
    println!("{} {:?}", long_tuple.0, long_tuple); // tuple 访问

    // 嵌套
    let tuple_of_tuples = ((1u8, 2u16, 2u32), (4u64, -1i8), -2i16);
    println!("{:?}", tuple_of_tuples);
    
    // 元组打印最多只能 12 个，编译器的限制
    // let too_long_tuple = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
    // println!("too long tuple: {:?}", too_long_tuple.12);

    // reverse 操作
    let pair = (1, true);
    println!("the reversed pair is {:?}", reverse(pair));

    // 可以这样取值
    let tuple = (1, "hello", 4.5, true);
    let (a, b, c, d) = tuple;
    println!("{:?}, {:?}, {:?}, {:?}", a, b, c, d);

    // 字段未命名结构体
    #[derive(Debug)]
    struct Matrix(f32, f32, f32, f32);
    let matrix = Matrix(1.1, 1.2, 2.1, 2.2);
    println!("{:?}", matrix);

    // 数组
    let xs: [i32; 5] = [1, 2, 3, 4, 5];
    // 500 长度，全部初始化为 0
    let ys: [i32; 500] = [0; 500];
    println!("{} {} {}", xs[0], xs.len(), ys.len());

    // 数组占用栈内存空间
    println!("array occupies {}、{} bytes", std::mem::size_of_val(&xs), std::mem::size_of_val(&ys));

    // [starting_index..ending_index)
    // [2, 3, 4]
    // 数组可以自动当做 slice 访问，slice 必须是引用类型
    analyze_slice(&xs[1 .. 4]);
}

fn reverse(pair: (i32, bool)) -> (bool, i32) {
    // `let` can be used to bind the members of a tuple to variables
    let (integer, boolean) = pair;
    (boolean, integer)
}

// 数组函数传递
fn analyze_slice(slice: &[i32]) {
    println!("first element of the slice: {}", slice[2]);
    println!("the slice has {} elements", slice.len());
}
```
