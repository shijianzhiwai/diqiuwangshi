# Flow of Control

这里的语法概念和 [[Expressions]] 语法关联。

```rust
#![allow(unreachable_code)]
#[allow(unused_labels)]

fn main() {
    let n = 5;
    if n < 0 {
        print!("{} is negative", n);
    } else if n > 0 {
        print!("{} is positive", n);
    } else {
        print!("{} is zero", n);
    }

    let big_n =
        if n < 10 && n > -10 {
            println!(", and is a small number, increase ten-fold");
            10 * n
        } else {
            println!(", and is a big number, halve the number");
            n / 2 // 最后为表达式，如果带了分号，这会返回空元祖，类型不符会报错
        }; // 变量也可以通过 if 赋值，最后有一个分号

    println!("{} -> {}", n, big_n);

    let mut count = 0u32;
    // loop 等同于 Go 里面的 for 关键词
    loop {
        count += 1;
        if count == 3 {
            println!("three");
            continue;
        }
        println!("{}", count);

        if count == 5 {
            println!("OK, that's enough");
            break;
        }
    }
    // 带有 lable 的循环
    'outer: loop {
        println!("Entered the outer loop");

        'inner: loop {
            println!("Entered the inner loop");
            // This would break only the inner loop
            //break;
            break 'outer;
        }
        println!("This point will never be reached");
    }

    // 当然，循环也可以和 if else 一样给一个变量赋值
    let mut counter = 0;
    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2; // 赋值语句放在 break 后面，有分号
        }
    };
    assert_eq!(result, 20);

    // 同样也支持 while 循环
    let mut n = 1;
    while n < 101 {
        if n % 15 == 0 {
            println!("fizzbuzz");
        } else if n % 3 == 0 {
            println!("fizz");
        } else if n % 5 == 0 {
            println!("buzz");
        } else {
            println!("{}", n);
        }
        n += 1;
    }
    
    // 上面语法使用 for in 左包含，又不包含 1-100
    for n in 1..101 {
        if n % 15 == 0 {
            println!("fizzbuzz");
        } else if n % 3 == 0 {
            println!("fizz");
        } else if n % 5 == 0 {
            println!("buzz");
        } else {
            println!("{}", n);
        }
    }

    // 左右都包含为
    for n in 1..=100 {
        if n % 15 == 0 {
            println!("fizzbuzz");
        } else if n % 3 == 0 {
            println!("fizz");
        } else if n % 5 == 0 {
            println!("buzz");
        } else {
            println!("{}", n);
        }
    }

    let names = vec!["Bob", "Frank", "Ferris"];

    for name in names.iter() {
        match name {
            &"Ferris" => println!("There is a rustacean among us!"),
            // 带有 & 符号，vec 在循环之后还可以重用
            _ => println!("Hello {}", name),
        }
    }
    
    println!("names: {:?}", names);

    for name in names.into_iter() {
        match name {
            "Ferris" => println!("There is a rustacean among us!"),
            _ => println!("Hello {}", name),
        }
    }

    // 使用 into_iter 方法之后 vec 在循环之后就变得不能用了，这句编译会报错
    // println!("names: {:?}", names);

    let mut names = vec!["Bob", "Frank", "Ferris"];

    for name in names.iter_mut() {
        *name = match name {
            // 这里给 Ferris 重新赋值为 There is a rustacean among us!
            &mut "Ferris" => "There is a rustacean among us!",
            _ => "Hello",
        }
    }

    println!("names: {:?}", names);
}
```
