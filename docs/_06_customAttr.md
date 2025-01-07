模板 > 模板语法

# 自定义属性

使用构建你自己的内置的自定义属性。

一个自定义属性允许你创建特殊的属性去增强和修饰存在的 HTML 元素和组件。原生的属性以例如`disabled`表单输入或者 aria 文本标签的形式存在。自定义属性特别有用的存在是可以生成他们自己的标记包装 HTML 插件。

## 创建自定义属性

在一个简单的层面来说，自定义属性非常像[组件]()。他们可以[绑定属性]()，而且它们使用类来定义它们本身。

一个基本的自定义睡醒看起来像这样：

```ts
export class CustomPropertyCustomAttribute {}
```

如果你想用`CustomElement`替代`CustomAttribute`，它将变成一个组件。在核心层面，自定义属性是更原始的组件形式。

让我们创建一个自定义属性为任何 dom 元素去添加红色背景和高度：

```ts
import { INode, resolve } from "aurelia";

export class RedSquareCustomAttribute {
    private element = resolve(INode) as HTMLElement;
    constructor() {
        this.element.style.width = this.element.style.height = "100px";
        this.element.style.backgroundColor = "red";
    }
}
```

现在，让我们自定义属性：

```
<import from="./red-square"></import>

<div red-square></div>
```

我们引入了自定义属性所以 DI 认识它然后在一个空 DIV 上使用它。我们有了一个红色背景的高一百像素的元素。

## 显式自定义属性

`customAttribute`装饰器允许你创建自定义属性，包括显式的名字。还有其他配置选项可以去创建别名。

### 显式属性命名

你可以使用`name`配置属性显式的命名自定义属性。

```ts
import { customAttribute, INode, resolve } from "aurelia";

@customAttribute({ name: "red-square" })
export class RedSquare {
    private element = resolve(INode) as HTMLElement;

    constructor() {
        this.element.style.width = this.element.style.height = "100px";
        this.element.style.backgroundColor = "red";
    }
}
```

### 属性别名

`customAttribute`允许你创建一个或多个属性可以遵循的别名。

```ts
import { customAttribute, INode, resolve } from "aurelia";

@customAttribute({ name: "red-square", aliases: ["redify", "redbox"] })
export class RedSquare {
    private element = resolve(INode) as HTMLElement;

    constructor() {
        this.element.style.width = this.element.style.height = "100px";
        this.element.style.backgroundColor = "red";
    }
}
```

我们现在可以使用我们的自定义属性通过注册的名字`red-square`也可以使用`redify`和`redbox`像以下高亮例子在元素中使用的别名一样。

```html
<div redify></div>
<div redbox></div>
```

## 单值绑定

::: danger 不懂的词汇
wrapping
markup
simplistic
primitive
explicit
:::
