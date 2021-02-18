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
    // 变量标注
    let logical: bool = true;
    let a_float: f64 = 1.0;
    // 后缀标注
    let an_integer   = 5i32;

    // 默认
    let default_float   = 3.0; // `f64`
    let default_integer = 7;   // `i32`
    
    // 类型推断，下一行 inferred_type 为 i64
    let mut inferred_type = 12;
    inferred_type = 4294967296i64;
    
    // mut 定义的变量可修改，无 mut 关键字定义不可修改
    let mut mutable = 12;
    mutable = 21;
    
    // 错误，类型不符合
    mutable = true;
    
    // 可覆盖定义
    let mutable = true;
}
```
