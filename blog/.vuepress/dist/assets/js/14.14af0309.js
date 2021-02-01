(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{484:function(s,t,a){"use strict";a.r(t);var n=a(8),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("最近想研究一下 BPF 技术，家里的台式机是 Windows 10 系统，借机想使用一下 WSL，所以就尝试在 WSL 环境下安装 BPF 工具链。但是在安装中遇到了很多困难，网上相关 WSL2 安装 BPF 的资料也难以找到，所以就自己简单研究了一下。")]),s._v(" "),a("h2",{attrs:{id:"环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[s._v("#")]),s._v(" 环境")]),s._v(" "),a("ul",[a("li",[s._v("WSL 版本：2")]),s._v(" "),a("li",[s._v("发行版：Ubuntu 20.04.1 LTS")]),s._v(" "),a("li",[s._v("Windows 版本：20H2")])]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("常规环境下，直接按照官方文档安装即可："),a("a",{attrs:{href:"https://github.com/iovisor/bcc/blob/master/INSTALL.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/iovisor/bcc/blob/master/INSTALL.md"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("但是如果在 WSL2 环境下安装 linux-headers 依赖会找不到包，这个也是意料之中的事情，这个也是主要要解决的问题。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" bcc-tools libbcc-examples linux-headers-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -r"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\nReading package lists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". Done\nBuilding dependency tree\nReading state information"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". Done\nE: Unable to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("locate")]),s._v(" package linux-headers-4.19.128-microsoft-standard\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("WSL2 的系统信息如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -r\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.19")]),s._v(".128-microsoft-standard\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"从-wsl2-linux-源码安装-linux-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-wsl2-linux-源码安装-linux-header"}},[s._v("#")]),s._v(" 从 WSL2 Linux 源码安装 linux-header")]),s._v(" "),a("h3",{attrs:{id:"下载-wsl2-源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载-wsl2-源码"}},[s._v("#")]),s._v(" 下载 WSL2 源码")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/microsoft/WSL2-Linux-Kernel.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者也可以直接下载对应的源码包，快一点。")]),s._v(" "),a("p",[s._v("接下来切换到对应的分支或者 tag，这里就以上面的 "),a("strong",[s._v("4.19.128-microsoft-standard")]),s._v(" 版本为例：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout linux-msft-4.19.128\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"编译安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译安装"}},[s._v("#")]),s._v(" 编译安装")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" Microsoft/config-wsl .config\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" oldconfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" prepare\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" scripts\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" modules "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" modules_install\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要改名，把加号去掉")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /lib/modules/4.19.128-microsoft-standard+ /lib/modules/4.19.128-microsoft-standard \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("如果上述过程报错，多数情况下是缺少依赖，先尝试安装如下依赖：")]),s._v(" "),a("ul",[a("li",[s._v("bison")]),s._v(" "),a("li",[s._v("flex")]),s._v(" "),a("li",[s._v("libssl-dev")])]),s._v(" "),a("p",[s._v("未解决 Google 对应的错误信息，一般情况下是缺少依赖导致。")]),s._v(" "),a("h2",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),a("p",[s._v("以上都做完之后，全部工作就完成了，可以试一试效果：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" bcc-tools\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行一个 bcc 的测试命令")]),s._v("\n$ execsnoop-bpfcc\nPCOMM            PID    "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PPID")]),s._v("   RET ARGS\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),a("p",[s._v("如果 bcc 相关命令报 "),a("code",[s._v("open(/sys/kernel/debug/tracing/kprobe_events): No such file or directory")]),s._v("，可以执行如下命令解决")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -t debugfs debugfs /sys/kernel/debug\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[s._v("#")]),s._v(" 最后")]),s._v(" "),a("p",[s._v("目前 Windows 上的 WSL 可玩性还是非常高，基本上也很完善了，配合 Windows Terminal 体验很好,可以满足日常 Linux 环境的开发，不过还是有很多坑要自己踩。")]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.linuxquestions.org/questions/debian-26/compile-of-kernel-4-16-fails-4175628085/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.linuxquestions.org/questions/debian-26/compile-of-kernel-4-16-fails-4175628085/"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/microsoft/WSL2-Linux-Kernel/issues/78",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/microsoft/WSL2-Linux-Kernel/issues/78"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/iovisor/bcc/blob/master/INSTALL.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/iovisor/bcc/blob/master/INSTALL.md"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/iovisor/bcc/issues/1878",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/iovisor/bcc/issues/1878"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);