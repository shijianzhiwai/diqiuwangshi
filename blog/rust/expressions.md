# Expressions

```rust
fn main() {
    #![allow(unused_must_use)]
    #![allow(path_statements)]
    // 变量绑定
    let x = 5;

    // 表达式
    x;
    x + 1;
    15;

    let x = 5u32;
    let y = {
        let x_squared = x * x;
        let x_cube = x_squared * x;

        // y 等于最后这个表达式的值，大括号为块表达
        x_cube + x_squared + x
    };

    let z = {
        // 分号会取消这个表达式，z 的值会是空元祖 ()
        2 * x;
    };

    println!("x is {:?}", x);
    println!("y is {:?}", y);
    println!("z is {:?}", z);
}
```
