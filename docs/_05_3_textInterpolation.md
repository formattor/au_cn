模板 > 模板语法

# 文本插值

文本插值允许你在你的模板视图中展示值。通过利用`${}`,一个美元符号跟着开闭的大括号，你可以在你的 views 中显示值。如果你熟悉[模板文字](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)的话这种语法你会很熟悉。

## 用插值法显示值

插值可以被用来在你的 HTML 模板中显示变量的值，对象属性和其他合法数据的结构。

为了展示插值如何工作的，这有一个例子：

::: code-group

```ts [my-app.ts]
export class MyApp {
    myName = "Aurelia";
}
```

```html [my-app.html]
<p>Hello, my name is ${myName}</p>
```

:::

注意到我们在 HTML 模板中引用的变量和在我们 view model 中定义的一致的了吗？任何在我们 view model 类中指定的都可以在 view 中访问。Aurelia 将会代替`${myName}`用`Aurelia`认为它是一个炫酷的字符替代。所有在你 view model 中定义的属性都可以在你模板中被访问。

## 模板表达式

一个模板表达式允许你在`${}`中执行代码运算正如我们之前学过的那样。你可以执行加，减甚至在插值内调用函数。

在以下的例子中，我们添加了 2+2。值将会显示`4`

```html
<p>Quick maths: ${2 + 2}</p>
```

如果你有一个函数在你的 view model 中你也可以调用带参数的函数。

::: code-group

```ts [my-app.ts]
export class MyApp {
    adder(val1, val2) {
        return parseInt(val1) + parseInt(val2);
    }
}
```

```html [my-app.html]
<p>Behold mathematics, 6 + 1 = ${adder(6, 1)}</p>
```

:::

你也可以在你插值表达式中用三元运算符。

```html
<p>${isTrue ? 'True' : 'False'}</p>
```

## 可选语法

模板表达也是一个被支持的可选语法。Aurelia 在模板中支持以下的语法选择。

-   `??`
-   `?.`
-   `?.()`
-   `?.[]`

::: warning 提醒

尽管 Aurelia 支持一些可选语法，但 `??=` 还是不支持

:::

使用可选语法和空值合并允许我们创造更安全的表达而不需要`if.bind`或者 view models 中的样板代码。

```js
${myValue ?? 'Some default'}
```

这可以帮助代码清晰否则可能会有更长更复杂的三元表达以实现以上的结果。

## 语法说明

你将会感激你可以做得比 JS 允许你做的事做的更好，但是需要注意的是你在插值表达中所做的事是有限的。

1. 表达不能使用`；`或`，`连接。

2. 你不能使用原始的例如`Boolean`，`String`，`instanceOf`，`typeof`等值。

3. 你只能使用管道符`|`当使用值转换的时候而不是位运算。

::: danger 不懂的词汇
curly braces
addition
subtraction
nullish
coalescing
boilerplate
ternary
limitations
primitives
:::
