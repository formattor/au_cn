介绍 > Hello World

# 你的第一个组件 - 第二部分：View

使用声明式方法来描述应该如何渲染你的组件。

在之前的章节，我们创建了一个基础的 view model，而且你大概猜到了我们现在要在不写更多 JavaScript 代码的情况下创建一个带有文本输入 view 去更新当前值。

在 `scr` 目录下创建一个名为 `hello-name.html` 的文件，这将复杂化你已经创建的 view model(`hello-name.ts`或`hello-name.js`)。

首先，让我们写一些代码去显示当前值。注意我们是怎样像默认生成的`my-app.html`文件一样使用插值去打印出值的？`${name}`当前值在大括号中引用了我们之前章节定义了名为`name`的类属性。

```html
<div>
    <h4>Hello, ${name}!</h4>
</div>
```

我想说我们可以运行程序观察效果，但我们还没有引入我们的自定义元素，让我们现在做这件事。

替换掉整个`my-app.html`文件为以下代码：

```
<import from="./hello-name"></import>
<hello-name></hello-name>
```

我们使用 `import` 元素去引入我们新创建的组件。注意要缺少文件的后缀名。这是因为 Aurelia 知道去包含我们的 view model，而且包含我们的 view 和任何样式。

当我们通过它的名字引入自定义元素，Aurelia 知道使用默认的约定去获取文件名，将去除后缀的名字作为标记名（这是可配置的但是超出了这一个教程的范围）。

如果你想要用`npm start`去运行程序，你将会看到你的应用渲染了你的新组件。你应该能看到`Hello,Person!`的文本渲染在了 view 当中。一旦你的应用运行了，让他保持运行一旦你有任何更改将会自动检测以及重新渲染。

## 绑定名字到文本输入框

我们有一个功能性的自定义元素，但是我们承诺我们可以更新任何我们想更新的名字。在`hello-name.html`中添加以下内容到存在的标题下方。

```html
<div>
    <h4>Hello, ${name}!</h4>
    <p><input type="text" value.bind="name" /></p>
</div>
```

你现在应该看到带着值为`Person`的一个文本输入框。通过在 input 上添加`value.bind`，Aurelia 将默认使用双向绑定。这意味着 view-model 中的值将会显示在 view 上，而且如果改变了 view 或者 view-model,将会更新。把双向绑定作为同步值。

输入一些东西到输入框中，你可以看到标题的值和你输入的值保持一致。这生效了是因为 Aurelia 绑定原始的文本输入框的`value`属性而且保持跟踪变化而你不需要使用回调函数或其他任何东西。

你也许已经注意到，这真的没有很多代码。利用 Aurelia 的规范和默认，允许你写 Aurelia 的应用而不需要写冗长的十行以上的代码去做绑定和打印值。

::: danger 不懂的词汇
declarative
sceptical
complicate
curly
braces
strip
detected
beneath
sync
leveraging
verbosity
:::
