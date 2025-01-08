模板

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

### 单值绑定

有时候，你想要一个自定义属性只绑定一个属性。你不需要定义显式的绑定属性，因为 Aurelia 支持单值绑定的自定义属性。

```ts
import { INode, resolve } from "aurelia";

export class RedSquareCustomAttribute {
    private element = resolve(INode) as HTMLElement;
    private value;

    constructor() {
        this.element.style.width = this.element.style.height = "100px";
        this.element.style.backgroundColor = "red";
    }

    bind() {
        this.element.style.backgroundColor = this.value;
    }
}
```

如果一个值用于自定义属性那么这个`value`属性就会自动计算，然而，需要你去定义一个值属性作为显式绑定。

当值变化的时候，我们可以像这样访问：

```ts
import { bindable, INode, resolve } from "aurelia";

export class RedSquareCustomAttribute {
    private element = resolve(INode) as HTMLElement;

    @bindable() private value;

    constructor() {
        this.element.style.width = this.element.style.height = "100px";
        this.element.style.backgroundColor = "red";
    }

    bound() {
        this.element.style.backgroundColor = this.value;
    }

    valueChanged(newValue: string, oldValue: string) {
        this.element.style.backgroundColor = newValue;
    }
}
```

### 访问元素

当在一个 dom 元素上使用自定义属性的时候，这个实例可以让你能访问元素本身。为了实现它，你可以使用`INode`装饰和`HTMLElement`接口去注入和定位元素。

```ts
import { INode } from "aurelia";

export class RedSquareCustomAttribute {
    private element = resolve(INode) as HTMLElement;
}
```

以上代码是从第一个例子中提取的，允许我们在类内部通过使用`this.element`访问元素本身。这是我们设置 CSS 值和执行其他修改的方式，例如初始化像 jQuery 和其它库的第三方库。

::: info 提示
你也可以使用`resolve(Element)`或者`resolve(HTMLElement)`去获取主元素，就像`INode`。然而，使用`INode`更安全当在 Nodejs 环境下因为它没有一个全局的`Element`和`HTMLElement`。如果你不打算在 Nodejs 环境运行你的应用，你也可以只使用`Element`或者`HTMLElement`,像这样：`resolve(Element)`或`resolve(HTMLElement)`。
:::

### 具有绑定属性的自定义属性

在许多情况下，你也许只需要不用用户配置属性的自定义属性。然后，在某些情况下，你想要用户可以传输一个或多个属性去改变自定义属性的行为（像一个插件）。

使用绑定属性，你可以创建一个可配置的自定义属性。根据以上的例子，让我们创建背景颜色配置代替总是红色。我们将为此重命名属性。

```ts
import { bindable, INode, resolve } from "aurelia";

export class ColorSquareCustomAttribute {
    @bindable() color: string = "red";

    constructor(private element: HTMLElement = resolve(INode)) {
        this.element.style.width = this.element.style.height = "100px";
        this.element.style.backgroundColor = this.color;
    }

    bound() {
        this.element.style.backgroundColor = this.color;
    }
}
```

我们可以在每次使用的基础上提供一个颜色。让我们更进一步去允许大小也可配置。

```ts
import { bindable, INode, resolve } from "aurelia";

export class ColorSquareCustomAttribute {
    @bindable() color: string = "red";
    @bindable() size: string = "100px";

    constructor(private element: HTMLElement = resolve(INode)) {
        this.element.style.width = this.element.style.height = this.size;
        this.element.style.backgroundColor = this.color;
    }

    bound() {
        this.element.style.width = this.element.style.height = this.size;
        this.element.style.backgroundColor = this.color;
    }
}
```

### 响应绑定属性更改事件

我们已经有了可以在第一次初始化的时候允许的自定义属性代码，但是如果属性在渲染之后变化了，什么也不会发生。在绑定属性更改的时候我们需要使用改变检查功能去更新元素。

```ts
import { bindable, INode, resolve } from "aurelia";

export class ColorSquareCustomAttribute {
    @bindable() color: string = "red";
    @bindable() size: string = "100px";

    constructor(private element: HTMLElement = resolve(INode)) {
        this.element.style.width = this.element.style.height = this.size;
        this.element.style.backgroundColor = this.color;
    }

    bound() {
        this.element.style.width = this.element.style.height = this.size;
        this.element.style.backgroundColor = this.color;
    }

    colorChanged(newColor, oldColor) {
        this.element.style.backgroundColor = newColor;
    }

    sizeChanged(newSize: string, oldSize: string) {
        this.element.style.width = this.element.style.height = newSize;
    }
}
```

作为一个默认的规范，绑定属性改变回调将使用绑定属性名在最后跟上`Changed`的后缀。改变回调获取两个参数，新值和之前存在的值。

Want to learn more about bindable properties and how to configure them? Please reference the bindable properties section.

::: info 提示
想要理解更多绑定属性和如何配置他们？请参考[绑定属性]()章节。
:::

当我们的大小和颜色绑定属性变化时，我们的元素将会更新，而不是仅仅更新在渲染的时候

### 选项绑定

选项绑定提供了一个可以多绑定属性的能力的自定义属性。每个绑定属性必须通过使用`bindable`装饰器被指定。属性 view model 将会为每个绑定属性实施一个可选的`${propertyName}Changed(newValue, oldValue)`回调函数。

当绑定了这些选项，用分号分离每一个选项然后提供一个绑定命令或者字面量，像以下的例子。重要的是**在 DOM 中使用的时候绑定属性将会被转换成 dash-case 的形式**，它们绑定的属性在 view model 下会保持原本的格式。

```ts
import { bindable, INode, resolve } from "aurelia";

export class ColorSquareCustomAttribute {
    @bindable() color: string = "red";
    @bindable() size: string = "100px";

    constructor(private element: HTMLElement = resolve(INode)) {
        this.element.style.width = this.element.style.height = this.size;
        this.element.style.backgroundColor = this.color;
    }

    bound() {
        this.element.style.width = this.element.style.height = this.size;
        this.element.style.backgroundColor = this.color;
    }

    colorChanged(newColor, oldColor) {
        this.element.style.backgroundColor = newColor;
    }

    sizeChanged(newSize: string, oldSize: string) {
        this.element.style.width = this.element.style.height = newSize;
    }
}
```

To use options binding, here is how you might configure those properties:

为了使用选项绑定，这会告诉你怎样可以配置这些属性：

```
<import from="./color-square"></import>

<div color-square="color.bind: myColor; size.bind: mySize;"></div>
```

### 指定主属性

当你有超过一个的绑定属性时，你也许想要指定哪一个属性是首要的（如果有）。如果你更期望用户只配置一个属性，你可以提供绑定配置指定它为一个主属性。

```ts
import { bindable, INode } from "aurelia";

export class ColorSquareCustomAttribute {
    @bindable({ primary: true }) color: string = "red";
    @bindable() size: string = "100px";

    private element = resolve(INode) as HTMLElement;

    constructor() {
        this.element.style.width = this.element.style.height = this.size;
        this.element.style.backgroundColor = this.color;
    }

    bound() {
        this.element.style.width = this.element.style.height = this.size;
        this.element.style.backgroundColor = this.color;
    }

    colorChanged(newColor, oldColor) {
        this.element.style.backgroundColor = newColor;
    }

    sizeChanged(newSize, oldSize) {
        this.element.style.width = this.element.style.height = newSize;
    }
}
```

以上的例子指定颜色组为主要的绑定属性，我们的代码事实上没有改。我们使用自定义属性的方式略有不同。

```
<import from="./color-square"></import>

<div color-square="blue"></div>
```

或者，您可以将值本身绑定到属性：

```
<import from="./color-square"></import>

<div color-square.bind="myColour"></div>
```

## 从 DOM 中找到自定义属性

有时候，自定义属性被开发为一组两个或者更多，例如，dropdown 和 toggle 按钮的属性，从子属性中获取父属性是必要的。一个方式是使用`CustomAttribute.closest`方法遍历 DOM 找到特别的自定义属性，基于名字或者构造。名字`closest`模仿 DOM API `Element.prototype.closest`。

一个`CustomAttribute.closest`的例子如下：

```html
<div foo="1">
    <div bar="2"></div>
</div>
```

```ts
import { CustomAttribute, resolve, INode } from "aurelia";

@customAttribute("bar")
export class Bar {
    host = resolve(INode);
    parent = CustomAttribute.closest(this.host, "foo");
}
```

或者如下操作如果你想要使用构造函数搜索。

```ts
import { CustomAttribute, resolve, INode } from "aurelia";
import { Foo } from "./foo";

@customAttribute("bar")
export class Bar {
    host = resolve(INode);
    parent = CustomAttribute.closest(this.host, Foo); // <--- use constructor instead of string 'foo'
}
```

::: danger 不懂的词汇
wrapping
markup
simplistic
primitive
explicit
semicolon
consume
mimics
:::
