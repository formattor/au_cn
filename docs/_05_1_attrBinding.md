模板 > 模板语法

# 属性绑定

在 Aurelia 中属性绑定是一个强大的功能允许你绑定任何在模板中的原生 HTML 属性。这可以动态的更新元素属性例如 Classes,styles,和其他标准的 HTML 属性。

## 基础绑定语法

Aurelia 中绑定属性的基础语法是简单的：

```html
<div attribute-name.bind="value"></div>
```

-   `attribute-name.bind="value"`是绑定
-   `attribute-name`是绑定的目标
-   `bind`是绑定的命令
-   `value`是绑定表达式

你可以绑定几乎所有在综合 HTML 属性列表的属性，可以[在这](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)查找

::: info
在一个空表达式的绑定中，比如`attribute-name.bind`或者`attribute-name.bind=""`，`表达式`是自动影响目标的：他将会有一个`目标`值使用驼峰版本，所以`attribute-name.bind=""`意味着`attribute-name.bind="attributeName"`，这种行为也体现在其他命令上：

-   `.one-time`
-   `.to-view`
-   `.from-view`
-   `.two-way`
-   `.attr`

:::

## 绑定技巧和语法

Aurelia 提供了多个绑定属性的方法，每种方法都有语法和用例。

### 插值绑定

插值允许嵌入动态的字符串值，这有一个例子使用了插值绑定`id`属性。

```html
<div>
    <h1 id="${headingId}">My Heading</h1>
</div>
```

### 关键字绑定

Aurelia 提供了几种绑定关键字，每一种定义都是 view 和 view model 之间的数据流：

-   `one-time`: 从 view model 更新一次 view ，不对后来的影响更改。
-   `to-view`/`one-way`: 从 view-model 持续的更新 view。
-   `from-view`: 更新 view-model 基于 view 的改变。
-   `two-way`: 创建双向数据流，保持 view 和 view model 的同步。
-   `bind`: 自动决定合适的绑定模式，对表单元素默认是`two-way` ，其他元素是`to-view`

### 关键字绑定的例子

```html
<input type="text" value.bind="firstName" />
<input type="text" value.two-way="lastName" />
<input type="text" value.from-view="middleName" />

<a class="external-link" href.bind="profile.blogUrl">Blog</a>
<a class="external-link" href.to-view="profile.twitterUrl">Twitter</a>
<a class="external-link" href.one-time="profile.linkedInUrl">LinkedIn</a>
```

### 图像绑定

绑定图像属性，例如`src`和`alt`，如此简单：

```html
<img src.bind="imageSrc" alt.bind="altValue" />
```

### 禁用元素

绑定`disabled`属性到禁用到按钮以动态禁用输入。

```html
<button disabled.bind="disableButton">Disabled Button</button>
```

### innerHTML 和 TextContent

在`innerhtml`和`texthtml`之间选择渲染 HTML 内容还是纯文本内容。

```html
<div innerhtml.bind="htmlContent"></div>
<div textcontent.bind="textContent"></div>
```

## 高级绑定技巧

### 属性绑定是怎么工作的

Aurelia 使用映射函数去把 properties 转换成 HTML attributes。attribute 映射器处理规则，经典的改变 kebab-case 为 camelCase。然而，不是所有 properties 都直接映射为 attributes。

### 使用`.attr`标签

如果自动映射失败了，使用`.attr`确保合适的属性绑定：

```html
<input pattern.attr="patternProp" />
```

### 属性绑定行为

使用`.bind`和`& attr`执行属性绑定的行为以指定绑定类型。

```html
<input pattern.bind="patternProp & attr" />
```

## 语法说明

1. 表达式语法

去理解绑定语法的种类，或者为什么我们有绑定命令和插值，通过以下的例子看看 JS 对应部分：

```js
const firstName = "John";
const lastName = "Doe";

const fullName1 = `${firstName} ${lastName}`;
const fullname2 = firstName + " " + lastName;
const fullName3 = firstName.concat(" ", lastName);
```

以上所有例子从`firstName`和`lastName`去构建`fullName`都获得了相同的结果，但至少有三种方法！这是为了说明有时候人们为了偏好喜欢使用一个超过另一个，而且框架应该有这种灵活性去反映在 JS 这个语言上。

2. 属性定位语法

另外一个困惑点是`.bind`和`.attr`语法的可用性。有人会问为什么我们需要它们。

考虑以下设置`id`属性在`<input>`元素上的例子。

```js
const input = document.createElement("input");
input.id = "first-name";
input.setAttribute("id", "first-name");
```

通过在`<input>`上设置 id 通过`id`属性或者调用`setAttribute('id',...)`都会获得相同的结果，但是我们有两种方式！这部分是因为一个人可能的偏好，还可能使 Aurelia 和属性工作的事实，而且不是所有 properties 都反应他们的 attributes 对应。例如：

```html
<input my-custom-attr.bind="someValue" />
```

::: danger 不懂的词汇
comprehensive
Interpolation
embedding
subsequent
varieties
counter
illustrate
availability
counterparts
:::
