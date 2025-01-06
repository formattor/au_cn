模板 > 模板语法

# 模板变量

在你的视图模板中，使用`<let>`自定义元素你可以指定行内变量。

`<let>`元素支持插值字符串，普通字符串，引用 view model 变量和其他在你模板中的 let 绑定。

```
<let some-var="This is a string value"></let>
```

你可以通过驼峰变体显示值：

```html
<p>${someVar}</p>
```

你也可以在`<let>`中绑定变量：

```
<let math-equation.bind="1 + 2 + 5"></let>

<!-- This will display 8 -->
<p>${mathEquation}</p>
```

::: danger 不懂的词汇
variant
:::
