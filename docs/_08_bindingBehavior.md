模板

# 绑定行为

绑定行为是一个 view 资源的一类，就像数值转换器，自定义属性和自定义元素。绑定行为在你使用他们在绑定表达式声明去影响绑定的时候更像[数值转换器](_07_pipes)。

绑定行为和数值转换器的主要不同是绑定行为实现了对绑定实例的完全访问，通过它自身的生命周期。相对的是数值转换器，只可以截取从 model 到 view 的数值传输，反之亦然。

额外的的“访问”提供给绑定行为能力去改变绑定的行为。会有一些有趣的方案，以下你会看到。

## 节流

Aurelia 附带了一小部分开箱即用的公共方案。第一个就是节流帮的行为，限制 viwe-model 更新双向绑定的频率或者 to-view 绑定方案中更新 view 的频率。

默认情况下，`throttle`将只允许每 200 毫秒更新,你可以自定义比率，当然，这有一些例子。

**最多每 200 毫秒更新一个属性**

```html
<input type="text" value.bind="query & throttle" />
```

你也许注意到了第一件事是在以上例子中的`&`符号，用于声明绑定行为表达式。绑定行为表达式使用相同的语法模式作为数据转换器表达：

-   绑定行为可以接收的参数：`firstName & myBehavior:arg1:arg2:arg3`。

-   一个绑定表达式可以包含多个绑定行为：`firstName & behavior1 & behavior2:arg1`。

-   绑定表达式也可以包括数值转换器和绑定行为的结合：`${foo | upperCase | truncate:3 & throttle & anotherBehavior:arg1:arg2}`。

这有一个另外的`throttle`例子，演示传参到绑定行为的能力：

**最多每 850 毫秒更新一次属性**

```html
<input type="text" value.bind="query & throttle:850" />
```

当绑定事件发生在你 view-model 上的时候节流行为特别有用，这有一个鼠标移动事件的例子：

**处理事件最多 200 毫秒更新一次**

```html
<div mousemove.delegate="mouseMove($event) & throttle"></div>
```

### 刷新挂起节流调用

## 防抖

::: danger 不懂的词汇
category
intercept
[visa versa]
afforded
[ships with a handful]
Flush
forcefully
:::
