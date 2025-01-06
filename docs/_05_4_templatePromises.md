模板 > 模板语法

# 模板 Promises

Aurelia 2 提高了在模板中对 promises 的处理。

不像 Aurelia 1，promises 不得不在传输他们值到模板之前的 view model 中被处理。

这是通过`promise.bind`模板控制器实现的，支持了`then`，`pending`和`catch`的状态，减少了样板代码的需要。

## 基础例子

promise 绑定简化了异步数据的使用。它允许属性绑定各种状态的 promise:pending,resolved 和 rejected.

```html
<div promise.bind="promise1">
    <template pending>The promise is not yet settled.</template>
    <template then="data">The promise is resolved with ${data}.</template>
    <template catch="err">
        This promise is rejected with ${err.message}.
    </template>
</div>

<div promise.bind="promise2">
    <template pending>The promise is not yet settled.</template>
    <template then>The promise is resolved.</template>
    <template catch>This promise is rejected.</template>
</div>
```

## 使用方法绑定 Promise

以下例子显示了一个 fetchAdvice 的方法去绑定`promise.bind`属性。它使用`then`和`catch`去处理已解决的数据和方法。

::: code-group

```[my-app.html]
<let i.bind="0"></let>

<div promise.bind="fetchAdvice(i)">
    <span pending>Fetching advice...</span>
    <span then="data">
        Advice id: ${data.slip.id}<br />
        ${data.slip.advice}
        <button click.trigger="i = i+1">try again</button>
    </span>
    <span catch="err">
        Cannot get advice, error: ${err}
        <button click.trigger="i = i+1">try again</button>
    </span>
</div>
```

```ts [my-app.ts]
export class MyApp {
    fetchAdvice() {
        return fetch("https://api.adviceslip.com/advice", {
            // This is not directly related to promise template controller.
            // This is simply to ensure that the example demonstrates the
            // change in data in every browser, without any confusion.
            cache: "no-store",
        }).then((r) =>
            r.ok
                ? r.json()
                : () => {
                      throw new Error("Unable to fetch NASA APOD data");
                  }
        );
    }
}
```

:::

::: info 提示

变量`i`在模板中触发一个方法回调，因为 Aurelia 认为方法调用是纯方法，而且只在参数发生变化的时候重新调用他们。

:::

这个例子可以点击[以下](https://stackblitz.com/edit/au2-promise-binding-using-functions?ctl=1&embed=1&file=src/my-app.ts)查看。

<!-- todo -->

## Promise 绑定范围

`promise`模板控制器在自己的范围内运行，避免父组件范围和 view model 的意外污染。

```html
<div promise.bind="promise">
    <foo-bar then="data" foo-data.bind="data"></foo-bar>
    <fizz-buzz catch="err" fizz-err.bind="err"></fizz-buzz>
</div>
```

在这个例子中，`data`和`err`在 promise 控制器的范围内。为了在 view model 中访问这些数据，使用`$parent.data`或者`$parent.err`。

## 嵌套 Promise 绑定

Aurelia 2 支持嵌套 promise 绑定，允许你通过返回其他 promises 处理 promises。

```html
<template promise.bind="fetchPromise">
    <template pending>Fetching...</template>
    <template then="response" promise.bind="response.json()">
        <template then="data">${data}</template>
        <template catch>Deserialization error</template>
    </template>
    <template catch="err2">Cannot fetch</template>
</template>
```

## [repeat.for](https://github.com/aurelia/aurelia/blob/master/docs/user-docs/templates/template-syntax/repeats-and-list-rendering.md)使用 Promise 绑定

当在`repeat.for`中使用`promise.bind`的时候，被推荐用`let`绑定创建范围上下文。

```
<let items.bind="[[42, true], ['foo-bar', false], ['forty-two', true], ['fizz-bazz', false]]"></let>
<template repeat.for="item of items">
  <template promise.bind="item[0] | promisify:item[1]">
    <let data.bind="null" err.bind="null"></let>
    <span then="data">${data}</span>
    <span catch="err">${err.message}</span>
  </template>
</template>
```

```ts
import { valueConverter } from "@aurelia/runtime-html";

@valueConverter("promisify")
class Promisify {
    public toView(value: unknown, resolve: boolean = true): Promise<unknown> {
        return resolve
            ? Promise.resolve(value)
            : Promise.reject(new Error(String(value)));
    }
}
```

以上的例子展示了使用包括带有`promisify`值转换的`repeat.for`链。取决于第二个布尔值，值转换一个简单的值成一个 resolving 或 rejecting 的 promise。这个值转换他本身不是讨论的重点。它被用来构造一个`repeat.for`和`promise`的结合是简单的。

有一点重要的值得注意的是，使用`let`绑定会强制覆盖上下文中的两个属性，即`data`和`err`,在绑定的时候会获得更高的优先级。

没有这些覆盖上下文的属性，属性会字绑定上下文中创建，最终将会在第二次重复迭代的时候被覆盖。简单的说，使用`let`绑定，输出看起来像：

```html
<span>42</span>
<span>foo-bar</span>
<span>forty-two</span>
<span>fizz-bazz</span>
```

::: danger 不懂的词汇
boilerplate
simplifies
accidental
nested
involving
precedence
:::
