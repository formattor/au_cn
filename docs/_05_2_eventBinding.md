模板 > 模板语法

# 事件绑定

Aurelia 2 中的事件绑定提供了一个无缝的方式去处理你应用中的 DOM 事件。通过在你的 view 模板中直接附加事件监听，你可以简单的响应用户的交互例如点击，键盘等等。这篇指南将会深入 Aurelia 2 具体的事件绑定，提供具体解释和例子去提高你的理解和对这一功能的使用。

## 理解事件绑定

Aurelia 2 简化了事件绑定方法到你 view model 的过程。它用了直观的语法允许你指定事件类型和当事件发生的时候去触发响应方法。

### 事件绑定语法

Aurelia 2 中常规的事件绑定语法像以下一样：

```
<element event.trigger="methodName(argument1, argument2, ...)"></element>
```

-   `element`代表了你想要附加事件监听的 HTML 元素。

-   `event`是你想要监听的事件（例如，点击，键盘）。

-   `.trigger`是在事件触发的时候告诉 Aurelia 去监听指定事件和调用相关方法的绑定的命令。

-   `methodName`是当事件触发的时候在你 view-model 中的方法名字。

-   `argument1`, `argument2`, ...是你可以传递给方法的可选参数。

### 事件绑定命令

Aurelia 2 为事件绑定提供了两种主要的命令。

1. `.trigger`: 这个命令在冒泡阶段关联一个事件监听用于响应事件。他是最常用的事件绑定命令并且可以适用大多数情况。

2. `.capture`: 这个命令在捕获阶段监听事件。它一般适用于特殊的事件，例如当你需要在他们到达一个目标元素之间拦截事件，你可以阻止他们扩散。

#### 例子：click 事件绑定

为了监听一个在按钮上的 click 事件并且调用一个名为`handleClick`的方法，你将写下：

```html
<button click.trigger="handleClick()">Click me!</button>
```

当按钮被点击，你 view-model 的`handleClick`事件就会被执行。

### 传递事件数据

你可以传递事件对象本身或其他自定义数据到你事件处理方法中。例如，传递事件对象到`handleClick`方法，你可以修改为以下绑定：

```html
<button click.trigger="handleClick($event)">Click me!</button>
```

在你的 view model 中，`handleClick`将会接收一个事件对象作为参数：

```js
export class MyViewModel {
    handleClick(event) {
        // Handle the click event
    }
}
```

## 公共事件

Aurelia 2 允许你绑定任何标准的 DOM 事件。这有一些你也许会用到的公共事件：

### Click

`click`事件经常用于按钮，链接和其他可点击的元素。

```html
<a href="#" click.trigger="navigate()">Go somewhere</a>
```

### Keypress

`keypress`事件用来响应用户在文本区域的输入或者处理键盘导航。

```html
<input type="text" keypress.trigger="validateInput($event)" />
```

### Mouseover

`mouseover`事件触发交互当用户 hover 到元素上的时候。

```html
<div mouseover.trigger="showTooltip()">Hover over me!</div>
```

## 处理事件传递

有时，你也许想要从 DOM 树上停止一个事件的冒泡或者阻止和事件有关的默认行为。你可以在你事件处理方法上使用事件对象方法：

-   `event.stopPropagation()`: 阻止事件冒泡或捕获阶段更多的扩散。

-   `event.preventDefault()`: 取消事件如果它是可取消的，而不会停止进一步扩散。

## 高级事件绑定

当`.trigger`和`.capture`命令覆盖更多的用例，Aurelia 2 也允许更多高级的方案，例如出于性能原因节流事件处理或处理自定义
事件。

### 节流事件

为了提高性能，尤其是事件可以被频繁的触发，例如 mouseover 或者 scroll，你可以使用 Aurelia 的绑定行为节流事件处理触发。

```html
<div mousemove.trigger="handleMouseMove() & throttle:100">
    Move your mouse over me
</div>
```

在以上的例子中，`handleMouseMove`方法在 100 微秒内将会被调用最多一次，无论`mouseover`事件被触发了多少次。

### 自定义事件

Aurelia 2 支持自定义事件，这在集成第三方库或者创建自己的自定义组件的时候非常有用。

```html
<custom-element my-event.trigger="handleCustomEvent($event)"></custom-element>
```

在这个例子中，`my-event`是一个自定义事件由`custom-element`发送，然后`handleCustomEvent`是将会响应它的方法。

## 事件绑定：例子和方案

为了帮你更好的理解 Aurelia 2 中的事件绑定，我们已经编译了一套例子集合和方案演示不同的技巧和更好的练习。这些应该会给你关于在你应用中更高效的处理事件更深的见解。

### 带修饰符的事件绑定

#### 自我绑定行为

为了确保一个事件只触发一个方法如果事件来源于元素自己（而且不来源于它的子元素），你可以使用`self`绑定行为。

```html
<div click.trigger="divClicked() & self">
    <button click.trigger="buttonClicked()">Button</button>
</div>
```

这个设置确保了当自我绑定行为从子元素过滤掉事件冒泡时点击`按钮`不会触发`divClicked()`方法。

### 与事件结合双向绑定

#### Checkbox 修改事件

一个 checkbox 的状态改变可以通过绑定修改事件去执行响应用户交互的行为。

```html
<input
    type="checkbox"
    checked.bind="agree"
    change.trigger="onAgreementChange()"
/>
```

```js
export class MyViewModel {
    agree = false;

    onAgreementChange() {
        // Logic to handle checkbox state change
    }
}
```

### 键盘交互

#### 处理指定的按键

去响应指定的按键，例如"Enter"或者"Escape"，你可以在你的方法中检查事件对象。

```html
<input type="text" keydown.trigger="handleKeydown($event)" />
```

```js
export class MyViewModel {
    handleKeydown(event) {
        switch (event.key) {
            case "Enter":
                // Handle Enter key press
                break;
            case "Escape":
                // Handle Escape key press
                break;
            // Add more cases as needed
        }
    }
}
```

### 使用动态内容

#### 列表的事件委托

事件委托在处理动态生成内容的事件上是有用的，例如 items 的列表。

```html
<ul click.trigger="listClicked($event)">
    <li repeat.for="item of items" data-id="${item.id}">${item.name}</li>
</ul>
```

```js
export class MyViewModel {
    items = []; // Your dynamic array of items

    listClicked(event) {
        const itemId = event.target.getAttribute("data-id");
        if (itemId) {
            // Logic to handle the click event on an item
        }
    }
}
```

### 自定义事件和参数

自定义事件的发送和响应

自定义元素可以发布带有关联数据的自定义事件，父组件可以监听和处理。

自定义元素：

```js
export class CustomElement {
    // inject host element to dispatch custom event
    host = resolve(Element);
    someMethod() {
        const data = {
            /* Payload data */
        };
        this.host.dispatchEvent(new CustomEvent({ detail: data }));
    }
}
```

父组件：

```html
<custom-element
    my-custom-event.trigger="handleCustomEvent($event)"
></custom-element>
```

父 view-model:

```js
export class ParentViewModel {
    handleCustomEvent(event) {
        const data = event.detail;
        // Logic to handle the custom event and its data
    }
}
```

### 自动补全和搜索输入

#### 为自动补全功能节流输入

对于搜索或者自动补全的功能，用户输入可以频繁的更新触发，节流可以避免执行过度。

```html
<input type="text" input.trigger="search($event.target.value) & debounce:300" />
```

```js
export class MyViewModel {
    search(query) {
        // Logic to perform search based on query
    }
}
```

这里，`search`功能只会在用户停止输入 300 微秒后被调用，提高了性能和用户体验。

这些样例展示了 Aurelia 2 事件绑定的多样性。通过理解和运用这些模式，你可以在一个可控的高性能的情况下创建响应式和高效的应用以响应用户行为。

### 事件修饰符

当你需要确保在时间执行之前要满足一些条件，你可以使用事件修饰符。事件修饰符可以通过事件语法指定，根据冒号和修饰符：

```js
[event].trigger[:modifier]="[expression]"
```

默认情况下，Aurelia 处理两种公共事件：mouse 和 keyboard 事件。以下有一个例子：

```html
<button click.trigger:ctrl="onCtrlClick()">Next page</button>
```

在以上的例子中，处理函数`onCtrlClick()`将只有在按钮点击且`Ctrl`键按下的时候才会被调用。键盘事件有时候在更复杂的情况下使用，例如以下例子：

```html
<textarea keydown.trigger:ctrl+enter="send()">
```

在这个例子中，我们将只在用户点击`Enter`+`Ctrl`的组合键的时候触发。这个例子也掩饰了我们如何使用多个修饰符，他们可以通过`+`作为分隔符分离。

#### 阻止默认行为和停止冒泡

`preventDefault`和`stopPropagation`是两个可以在任何事件上调用的公用方法。事件修饰符可以被用来声明和简单的调用这些方法，像下边的例子一样：

```html
<button click.trigger:stop:prevent="validate()">Validate</button>
```

#### 鼠标按钮修饰符

的处理鼠标事件的时候，有时候它需要指定鼠标按钮。默认情况下，Aurelia 提供了三种修饰符分别是`left`,`middle`和`right`去支持鼠标按钮验证。以下是一个例子：

```html
<button click.trigger:middle="newTab()">Open in new tab</button>
```

#### 键盘映射

当使用键盘事件修饰符时，有时候一个具体的键被用来作为修饰符。你可以使用字符码作为修饰符来代表按键，像以下的例子，我们想要去处理`Ctrl`+`K`的组合键（注意是大写的`K`）:

```html
<textarea keydown.trigger:ctrl+75="openSearchDialog()">
```

75 is the charcode of the upper case letter K.

Even though direct, it's not always clear 75 means when looking at the template, so it's often desirable to use the real letter K instead. Though Aurelia is not taught to, by default, understand the letter K means the code 75. You can teach Aurelia by adding to the IKeyMapping:

`75`是大写字母 K 的字符码。

尽管很直接，当我们在模板上看到它的的时候也经常不会很清楚 75 的含义，所以常用的可取的方式是使用真实的字母 K 替代。尽管 Aurelia 没有教这么做，默认情况下，理解 K 意味着

::: danger 不懂的词汇
delve
reserved
circumstances
intercept
invocation
insights
inspect
excessive
versatility
colon
employ
delimiter
declaratively
letter
desirable
:::
