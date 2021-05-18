# LLVM 

1. Rust 部分内置函数使用的是 LLVM IR 指令，例如 unsafe 转换 [to_int_unchecked](https://doc.rust-lang.org/std/intrinsics/fn.float_to_int_unchecked.html) 使用了 fptoui/fptosi 指令。之所以是 unsafe 的，是因为这种强制转换会导致结果不确定，这类不确定的值在 LLVM 中称作 [poisonvalues](https://llvm.org/docs/LangRef.html#poisonvalues)
