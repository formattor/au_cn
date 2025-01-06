模板 > 模板语法

# 模板引用

在 Aurelia 2 中模板引用提供了一个强大灵活的方式去连接你的 HTML 模板和你 JS 或 TS 的 view models。使用 ref 属性，你可以轻松的辨认和交互你模板中指定的部分，使它更高效的去操作 DOM 或者访问模板数据。

## 声明模板引用

### 基本使用

在你模板中添加 ref 属性到 HTML 元素就可以创建模板引用。这标记了元素作为一个模板，允许你直接访问你的 view model。

```html
<input type="text" ref="myInput" placeholder="First name" />
```

在这个例子中，`myInput`引用了 input 元素，可以在模板在使用和响应 view model。

### 在模板中访问引用

模板应用在模板中是立即生效的。例如，你可以在输入文本中显示数据：

```html
<p>${myInput.value}</p>
```

这个绑定动态的显示当前输入框的值。

### 在 view model 中访问引用

为了访问在 view model 中的引用元素，声明一个和引用一致的属性属性。对于 TS 用户，重要的是为类型安全定义属性类型。

```ts
export class MyApp {
    private myInput: HTMLInputElement;

    // Additional view model logic here
}
```

## 高级用法

### 自定义元素和属性的用法

Aurelia 的`ref`属性不限制标准的 HTML 元素。它也可以与自定义元素和属性一起使用，去引用它们自己组件实例（view models）或控制器。

**自定义元素实例** 用`component.ref="expression"`去给一个自定义元素的组件实例（view-model）创建引用，这是在 Aurelia V1 中被我们熟知的`view-model.ref`。

```html
<my-custom-element component.ref="customElementVm"></my-custom-element>
```

**自定义属性实例** 同样的，`custom-attribute.ref="expression"`可以引用一个自定义属性的组件实例（view-model）。

```html
<div my-custom-attribute custom-attribute.ref="customAttrVm"></div>
```

**控制器实例** 对于更高级的方案，`controller.ref="expression"`为子当以元素控制器实例创建了一个引用。

```html
<my-custom-element controller.ref="customElementController"></my-custom-element>
```

## 实际应用

模板引用有不可思议的用途在集成第三方库或者直接进行必要的 DOM 操作的时候。代替使用传统的 JS 查找去找到元素，模板引用提供了一个更直观，框架集成的方法。

::: info 提示

利用模板引用可以非常好的简化和元素的交互，尤其是当集成库需要直接 DOM 元素引用的时候。这个方法通过减少直接查询 DOM 促进更加清楚和更可维护的代码。

:::

::: danger 不懂的词汇
manipulate
Practical
:::
