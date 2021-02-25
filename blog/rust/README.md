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

## Custom Types

```rust
#![allow(dead_code)]
// A unit struct
struct Unit;

// A tuple struct
struct Pair(i32, f32);

// A struct with two fields
struct Point {
    x: f32,
    y: f32,
}

// Structs can be reused as fields of another struct
#[allow(dead_code)]
struct Rectangle {
    top_left: Point,
    bottom_right: Point,
}

// enum 类型
enum WebEvent {
    PageLoad, // An `enum` may either be `unit-like`, 可以是 unit 形式的
    PageUnload,
    KeyPress(char), // like tuple structs,
    Paste(String),
    Click { x: i64, y: i64 }, // or c-like structures.
}

// 匹配 WebEvent 枚举类型，使用 match 关键词
fn inspect(event: WebEvent) {
    match event {
        WebEvent::PageLoad => println!("page loaded"),
        WebEvent::PageUnload => println!("page unloaded"),
        WebEvent::KeyPress(c) => println!("pressed '{}'.", c),
        WebEvent::Paste(s) => println!("pasted \"{}\".", s),
        WebEvent::Click { x, y } => {
            println!("clicked at x={}, y={}.", x, y);
        },
    }
}

enum Status {
    Rich,
    Poor,
}

// 可以当做数字，从 0 开始
enum Number {
    Zero,
    One,
    Two,
}

// 自定义数字
enum Color {
    Red = 0xff0000,
    Green = 0x00ff00,
    Blue = 0x0000ff,
}

// 常量与静态变量
static LANGUAGE: &str = "Rust";
const THRESHOLD: i32 = 10;

fn main() {
    let point: Point = Point { x: 10.3, y: 0.4 };
    println!("point coordinates: ({}, {})", point.x, point.y);
    // 复制结构体，其中更改 x 字段
    let bottom_right = Point { x: 5.2, ..point };
    println!("second point: ({}, {})", bottom_right.x, bottom_right.y);

    // 重新命名，解构，两边是大括号
    let Point { x: top_edge, y: left_edge } = point;
    let _rectangle = Rectangle {
        top_left: Point { x: left_edge, y: top_edge },
        bottom_right, // 这里可以简写命名
    };

    // Instantiate a unit struct
    let _unit = Unit;

    let pair = Pair(1, 0.1);
    println!("pair contains {:?} and {:?}", pair.0, pair.1);
    // 命名解构
    let Pair(integer, decimal) = pair;
    println!("pair contains {:?} and {:?}", integer, decimal);
    // tuple struct 不能这样解构取值，必须声明类型
    // let (a, b) = pair;
    // println!("{} {}", a, b);

    // 枚举类型创建
    let pressed = WebEvent::KeyPress('x');
    // `to_owned()` creates an owned `String` from a string slice.
    let _pasted  = WebEvent::Paste("my text".to_owned()); // 未使用变量使用下划线标识，否则编译器会报错
    let _click   = WebEvent::Click { x: 20, y: 80 };
    let _load    = WebEvent::PageLoad;
    let _unload  = WebEvent::PageUnload;

    inspect(pressed); // ...

    use crate::Status::*;
    // 等价于 `Status::Poor`. 上面使用了 use 可以这么写
    let status = Poor;

    match status {
        Rich => println!("The rich have lots of money!"),
        Poor => println!("The poor have no money..."),
    }

    println!("zero is {}", Number::Zero as i32);
    println!("one is {}", Number::One as i32);

    // 需要使用 as 关键词转换，否则会因为类型报错，Color::Red 是 Color 类型
    println!("roses are #{:06x}", Color::Red as i32);
    println!("violets are #{:06x}", Color::Blue as i32);
}
```

## Variable Bindings

```rust
fn main() {
    #![allow(unused_variables)]
    #![allow(unused_assignments)]

    let _immutable_binding = 1;
    let mut mutable_binding = 1; // mut 关键词的变量才可以修改
    mutable_binding += 1;
    // _immutable_binding += 1; 这行编译会报错

    let long_lived_binding = 1;
    let shadowed_binding = 1;
    let a_binding; // 未初始化变量
    let mut _mutable_integer = 7i32;
    {
        let short_lived_binding = 2;
        println!("inner short: {}", short_lived_binding);

        // 当前范围可以拿到外部范围的变量
        println!("before being shadowed: {}", shadowed_binding);
        let shadowed_binding = "abc"; // 可以重新绑定赋值
        println!("shadowed in inner block: {}", shadowed_binding);

        let x = 2;
        a_binding = x * x; // 内部可初始化变量

        let _mutable_integer = _mutable_integer;
        // _mutable_integer = 50; 虽然 _mutable_integer 外部是 mut，但是上面重新绑定无 mut 关键词，这里是不能更改的
    }
    // println!("outer short: {}", short_lived_binding);  // 这行编译会报错，变量 short_lived_binding 对当范围不可见
    println!("outer long: {}", long_lived_binding);

    // 虽然上面块内改变了这个值，但是对这里不可见
    println!("outside inner block: {}", shadowed_binding);
    // 外部可以重新绑定
    let shadowed_binding = 2;
    println!("shadowed in outer block: {}", shadowed_binding);

    println!("a binding: {}", a_binding);

    let another_binding;
    // println!("another binding: {}", another_binding); // 这行编译会报错，another_binding 未初始化
    another_binding = 1;
    println!("another binding: {}", another_binding);

    // 当前范围有 mut 关键词，可更改
    _mutable_integer = 3;
}
```

## Types

```rust
// Suppress all warnings from casts which overflow.
#![allow(overflowing_literals)]

fn main() {
    let decimal = 65.4321_f32;

    let integer = decimal as u8;
    let character = integer as char;

    // 浮点不能转换成 char
    // let character = decimal as char;

    println!("Casting: {} -> {} -> {}", decimal, integer, character);

    // when casting any value to an unsigned type, T,
    // T::MAX + 1 is added or subtracted until the value
    // fits into the new type

    // 1000 already fits in a u16
    println!("1000 as a u16 is: {}", 1000 as u16);

    // 1000 - 256 - 256 - 256 = 232
    // 1000 => 0b1111101000 i32 => u8 0b11101000 232 高位会被截断
    println!("1000 as a u8 is : {}", 1000 as u8);
    // -1 + 256 = 255
    // -1 => 0b11111111 => u8 0b11111111 255
    println!("-1 => 0b{:b}  -1 as a u8 is : {} ", -1i8, (-1i8) as u8);

    // 对于正数有： 1000i32 as u8 == 1000 % 256
    println!("1000 mod 256 is : {}", 1000 % 256);

    // When casting to a signed type, the (bitwise) result is the same as
    // first casting to the corresponding unsigned type. If the most significant
    // bit of that value is 1, then the value is negative.

    println!(" 128 as a i16 is: {}", 128 as i16);
    // 128 => 0b10000000 => i8 => 0b10000000 符号位为1 正好转换为负数 -128
    // 负数以其正值的补码形式表达：0b10000000-1 = 0b01111111 再按位取反 0b1000000 => 128
    println!("128 as a i8 is : {}", 128 as i8);

    // 1000 as u8 -> 232
    println!("1000 as a u8 is : {}", 1000 as u8);
    // 232 => 0b11101000 => -1 => 0b11100111 => 取反 => 0b00011000 => 十进制为 24，这里结果为 -24
    println!("232 => 0b{:b} 232 as a i8 is : {}", 232, 232 as i8);
    
    // Since Rust 1.45, the `as` keyword performs a *saturating cast* when casting from float to int.  
    // If the floating point value exceeds the upper bound or is less than the lower bound, the returned value will be equal to the bound crossed.
    
    // 1.45 版本之后浮点数转换如果超过范围则取临近的极值
    println!("300.0 is {}", 300.0_f32 as u8); // 300.0 is 255
    println!("-100.0 as u8 is {}", -100.0_f32 as u8); // -100.0 as u8 is 0
    println!("nan as u8 is {}", f32::NAN as u8); // nan as u8 is 0
    
    // This behavior incures a small runtime cost and can be avoided with unsafe methods, however the results might overflow and return **unsound values**. Use these methods wisely:
    // 上面的转换实际上可能会加入额外的逻辑在代码中，会有一些小成本，unsafe 可避免这种问题
    unsafe {
        // 以下行为为内部函数行为，使用 LLVM IR fptoui/fptosi 指令，超出范围的值会导致行为不确定 https://doc.rust-lang.org/std/intrinsics/fn.float_to_int_unchecked.html
        // 这些值在 LLVM 中称作 poisonvalues https://llvm.org/docs/LangRef.html#poisonvalues
        println!("300.0 is {}", 300.0_f32.to_int_unchecked::<u8>()); // 300.0 is 44
        println!("-100.0 as u8 is {}", (-100.0_f32).to_int_unchecked::<u8>()); // -100.0 as u8 is 156
        println!("nan as u8 is {}", f32::NAN.to_int_unchecked::<u8>()); // nan as u8 is 0
    }

    let elem = 5u8;
    let mut vec = Vec::new();
    vec.push(elem);
    // vec.push(2f32); 自动推断 vec 为 Vec<u8> 类型，这里会报错
    println!("{:?}", vec);

    // 类型别名
    type NanoSecond = u64;
    type Inch = u64;

    // 注释允许使用非驼峰命名，一般情况下别名都使用驼峰命名
    #[allow(non_camel_case_types)]
    type u64_t = u64;

    // `NanoSecond` = `Inch` = `u64_t` = `u64`.
    let nanoseconds: NanoSecond = 5 as u64_t;
    let inches: Inch = 2 as u64_t;

    // Note that type aliases *don't* provide any extra type safety, because
    // aliases are *not* new types
    println!("{} nanoseconds + {} inches = {} unit?",
             nanoseconds,
             inches,
             nanoseconds + inches);
}
```
