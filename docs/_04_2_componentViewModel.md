介绍 > Hello World

# 你的第一个组件 - 第一部分：View Model

View Model 是你组件的业务逻辑所在的地方。接着创建你的第一个 view-model。

Aurelia 有一个默认的规定那就是有一个工作在 view 和 view-model 上的前提，他们被捆绑在一起。view-model 是你业务逻辑所在的位置。而且，如果你之前的工作中已经使用过.NET（或其他框架），你也许会联系到 controller。

导航到`src`目录下，这是你的应用代码存在的地方，打开`my-app(.ts/.js)`文件，这是程序的主入口而且文件的业务逻辑存放在这里，如你所见，此刻没有太多东西。

```js
export class MyApp {
    message = "Hello World!";
}
```

类的属性`message`包含一个字符串在我们的 view 中，我们正在显示它通过插值表达式。

```html
<div class="message">${message}</div>
```

现在我们要创建一个新的组件将会比 hello 组件更智能。在`src`目录下创建一个新文件叫`hello-name`，并且使用适当的文件后缀取决于你是否在用 TypeScript，所以，`hello-name.js`或者`hello-name.ts`。

```js
export class HelloName {
    name = "Person";
}
```

注意我们的新组件并没有多大不同与生成的那一个相比。这是有意为之。我们在 view 中使用`to-way`绑定去绑定名字属性，我们也不需要回调函数去更新这个值。

很好！你刚才创建了一个自定义 view-model 元素，这看起来不怎么样，但你刚学会了一个费查那个核心的基本概念关于绑定 Aurelia 应用。一个 view model 可以在你的想法下变得简单或者复杂。

在下一节，我们将与 view 挂钩去允许文本输入改变当前的值。

::: danger 不懂的词汇
premise
tied
interpolation
appropriate
intentional
hook this up
:::
