模板 > 模板语法

# 模板 Promises

Aurelia 2 提高了在模板中对 promises 的处理。

不像 Aurelia 1，promises 不得不在传输他们值到模板之前的 view model 中被处理。

这是通过`promise.bind`模板控制器实现的，支持了`then`，`pending`和`catch`的状态，减少了样板代码的需要。

## 基础例子

::: danger 不懂的词汇
boilerplate
:::
