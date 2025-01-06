模板 > 模板语法

# 全局

在 Aurelia 2 中，出于安全考虑模板被设计限制直接访问全局变量像`window`或者`document`。然而，是必要的对于某些方案可以访问确定的全局变量。Aurelia 允许访问预定义的公共的用在开发中的全局变量列表。

为了减少样板文件，Aurelia 允许模板表达式去访问一个经常使用的固定全局变量列表。这些全局变量如下：

```
Infinity
NaN
isFinite
isNaN
parseFloat
parseInt
decodeURI
decodeURIComponent
encodeURI
encodeURIComponent
Array
BigInt
Boolean
Date
Map
Number
Object
RegExp
Set
String
JSON
Math
Intl
```

## 全局例子

这有一些使用 Aurelia 模板全局变量的例子。使用方式和 JS 内部一样，除了在你 Aurelia 模板中。

### JSON 使用

在模板中直接操作 JSON 数据。

```html
<template>
    <pre>${JSON.stringify(user, null, 2)}</pre>
</template>
```

### 数学操作

使用 Math 对象执行运算。

```html
<template>
    <p>The square root of 16 is ${Math.sqrt(16)}</p>
</template>
```

### isNaN 的条件渲染

基于数字检查显示条件内容

```html
<template>
    <p if.bind="isNaN(value)">Not a number</p>
</template>
```

### `RegExp`的正则表达式

使用`RegExp`为数据验证摸着运算构造创建正则表达式。

```html
<template>
    <input value.bind="email" type="email" placeholder="Enter email" />
    <p if.bind="new RegExp('^\\S+@\\S+\\.\\S+$').test(email)">
        Valid Email Address
    </p>
</template>
```

### 通过`Object`动态访问对象属性

通过使用`Object`构造函数在对象上动态的访问属性。

```html
<template>
    <p>
        Property Value: ${Object.getOwnPropertyDescriptor(user,
        selectedProperty)?.value}
    </p>
</template>
```

### `Set`操作

演示 set 操作像合集，交集，差集。

```html
<template>
    <p>Unique Numbers: ${[...new Set(numbersArray)]}</p>
</template>
```

### 通过使用`encodeURI`和`decodeURI`编码和解码 URLs

操作 URL 字符串通过编码或解码它们。

```html
<template>
    <a href.bind="encodeURI(externalLink)">Visit External Site</a>
    <p>Original URL: ${decodeURI(externalLink)}</p>
</template>
```

### `Intl.NumberFormat`进行数字格式化

通过使用 Intl.NumberFormat 本地化格式化数字。

```html
<template>
    <p>
        ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'
        }).format(price)}
    </p>
</template>
```

### `Array`的复杂数组操作

演示复杂数组操作，例如方法链。

```html
<template>
    <p>
        Processed Data: ${Array.from(dataSet).filter(x => x.isActive).map(x =>
        x.value).join(', ')}
    </p>
</template>
```

## 最佳实践和注意事项

-   **节省使用：** 只在必要的时候依赖全局变量。更推荐组件属性和方法处理数据和逻辑。

-   **安全：** 在处理数据时使用全局方法的时候当心去避免 XSS 攻击和其他漏洞。

-   **性能：** 在模板中频繁的使用复杂的操作像 JSON.stringify 可以影响性能。考虑在组件类中处理这样的操作。

-   **反应：** 记得修改全局变量是没反应的。如果你需要反应，使用模板属性或者状态管理解决方案。

::: danger 不懂的词汇
[union, intersection, difference]
Sparingly
vulnerabilities
processed
Reactivity
:::
