模板

# 数值转换器（管道）

使用数值转换器去改变数值如何在你的应用中展示。你可以使用数值转换器去转换字符串，格式化日期，货币展示和其他形式的操作。他们可以被用来插值和绑定，在 view 中和数据一起工作。

如果你使用其它库或者框架，你也许知道数值转换器的另一个名字；管道。

## 理解数值转换器流程

通常情况下，你会创建一个数值转换器去转换模型数据为一个格式化的合适的形式以在 view 上显示；然而，有种情况是你需要转换数据从 view 到你所期望的格式化形式的 view model，典型的是使用输入元素的双向绑定。

### 到 View

`toView`方法通常接收第一个参数作为提供的值，后来的参数是配置值（如果适用）。这指定了值在进入 view 之前会发生什么变化以及允许你在显示之前修改它们。

### 从 View

`fromView`方法通常接收第一个参数作为提供的值，后来的参数是配置值（如果适用）。这指定了数据从 view 流动到 view model 会发生什么而且在 view model 接受变化的值之前允许你修改它们。

## 使用数值转换器

去使用数值转换器，你使用管道符`|`之后接着你想要使用的数值转换器的名字。如果你之前使用过 Angular,你会知道数值转换器作为管道使用。

尽管 Aurelia 本身没有预构建的数值转换器，这是使用假想之转换器转换字符串为小写字母的样子：

```html
<h1>${someValue | toLowercase}</h1>
```

数值转换器的代码也许是这个样子：

```ts
export class ToLowercaseValueConverter {
    toView(value) {
        return value.toLowerCase();
    }
}
```

## 转换数据使用多数值转换器和参数

### 多数值转换器

数值转换器可以链式调用，意味着你可以转换一个数值并且可以转换它通过其它数值转换器。为了链式调用数值转换器，你通过管道`|`分开你的数值转换器。在一个模拟的例子中，我们是我们的值变成小写然后通过其他数值转换器的调用以一个`strong`标签包裹变成加粗字体使之更粗。

```html
<h1>${someValue | toLowercase | bold }</h1>
```

### 基于数值转换器的参数

你也可以创建数值转换器接收一个或多个参数。对于数值转换器格式化数据，你也许想允许开发者指定想要格式化的东西，一个货币或日期格式化的转换器。

参数使用`:`符号被提供，而且像管道一样，对于多参数，你可以链住它们。参数可以作为一个或多个字符串被应用（作为一个或多个参数传输给数值转换器方法）或者单一的对象。

**静态参数**

```html
<h1>${someValue | date:'en-UK'}</h1>
```

此外，数值转换参数也支持绑定数值。不像其他类型的绑定，你只需提供变量，它将为你绑定。

**绑定参数**

```html
<h1>${someValue | date:format}</h1>
```

```ts
export class MyApp {
    format = "en-US";
}
```

**对象参数**

如果你的数据转换有大量的参数，现有方法将很快崩溃。你可以指定你的数值转换携带一个拥有一个或多个参数的单一对象。不像其它参数，对象参数将会让你命名它们。

```html
<ul>
    <li
        repeat.for="user of users | sort: { propertyName: 'age', direction: 'descending' }"
    >
        ${user.name}
    </li>
</ul>
```

在我们`fromView`和`toView`的方法中，第二个参数将是我们可以引用的提供的对象。

## 创建数值转换器

创建自定义数值转换器允许你去格式化你的数据以及如何展示和在你的 views 中获取。

像 Aurelia 其它的那样，数值转换器是一个类。一个不执行任何操作的数值转换器如下所示。这个例子不是 Aurelia 特供的，而是在 JS 中也有效。

```js
export class ThingValueConverter {
    toView(value) {
        return value;
    }
}
```

::: warning 警告
当在你模板中使用的时候数值转换器经常作为驼峰的方式被引用。
:::

In this example, we will use a decorator valueConverter to decorate our class. While you can use the ValueConverter naming convention as we did above, it's important to learn the different ways you can create value converters.

为了教你数值转换器如何被创建，我们创建了一个简单的数值转换器叫做 date,允许我们格式化日期。

在这个例子中，我们使用了一个`valueConverter`的装饰器去装饰我们的类。虽然你可以像我们上面做的那样使用`valueConverter`命名规则，但去学习不同的方式去创建数值转换也是很重要的。

::: code-group

```ts [date-value-convert.ts]
import { valueConverter } from "aurelia";

@valueConverter("date")
export class FormatDate {
    toView(value: string, locale = "en-US") {
        const date = new Date(value);

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
        const format = Intl.DateTimeFormat(locale, {
            month: "long",
            day: "numeric",
            year: "numeric",
            timeZone: "UTC",
        });

        if (Number.isNaN(date.valueOf())) {
            return "Invalid Date";
        }

        return format.format(date);
    }
}
```

:::

在你 view 中导入数值转换器

```
<import from="./date-value-converter" />
```

以下这个例子将会在你 view 中展示`June 22, 2021`。因为我们默认的日期格式是美国，他将会显示月-日-年。

```html
<p>${'2021-06-22T09:21:26.699Z' | date}</p>
```

我们在数值转换器中指定的位置参数提供了一个位置参数，允许你改变我们的日期如何展示。你在英国或者澳大利亚。默认的格式就是日-月-年。

```html
<p>${'2021-06-22T09:21:26.699Z' | date:'en-GB'}</p>
```

查看我们数值转换器的使用，可以点击[这里](https://aurelia-date-value-converter.stackblitz.io/)

// todo

## 附加数值转换器例子

为了更凸显数值转换器的用途，我们将提供不同数值转换器的例子让你可以在 Aurelia 应用中使用。

### 货币格式化转换器

格式化数字作为货币字符串

```ts
import { valueConverter } from "aurelia";

@valueConverter("currencyFormat")
export class CurrencyFormatValueConverter {
    toView(value, locale = "en-US", currency = "USD") {
        return new Intl.NumberFormat(locale, {
            style: "currency",
            currency: currency,
        }).format(value);
    }
}
```

```html
<p>Total: ${amount | currencyFormat:'en-US':'USD'}</p>
```

### 表情包转换器

转换指定的关键字或者短语为表情包。

```ts
import { valueConverter } from "aurelia";

@valueConverter("emoji")
export class EmojiConverter {
    private emojiMap = {
        love: "❤️",
        happy: "😊",
        sad: "😢",
        angry: "😠",
        coffee: "☕",
        star: "⭐",
        cat: "🐱",
        dog: "🐶",
        pizza: "🍕",
    };

    toView(value: string) {
        return value
            .split(/\s+/)
            .map((word) => this.emojiMap[word.toLowerCase()] || word)
            .join(" ");
    }
}
```

```html
<p>${'I love coffee and pizza' | emoji}</p>
```

### 黑话转换器

转换常规的文本为'leet'或'1337'用语，一种网络语言格式。

```ts
import { valueConverter } from "aurelia";

@valueConverter("leetSpeak")
export class LeetSpeakConverter {
    toView(value: string) {
        return value
            .replace(/a/gi, "4")
            .replace(/e/gi, "3")
            .replace(/l/gi, "1")
            .replace(/t/gi, "7");
    }
}
```

```html
<p>${'Aurelia is elite!' | leetSpeak}</p>
```

### 文本颠倒转换器

颠倒文本。

```ts
import { valueConverter } from "aurelia";

@valueConverter("upsideDown")
export class UpsideDownConverter {
    private flipMap = {
        a: "ɐ",
        b: "q",
        c: "ɔ",
        d: "p",
        e: "ǝ",
        f: "ɟ",
        g: "ƃ",
        h: "ɥ",
        i: "ᴉ",
        j: "ɾ",
        k: "ʞ",
        l: "l",
        m: "ɯ",
        n: "u",
        o: "o",
        p: "d",
        q: "b",
        r: "ɹ",
        s: "s",
        t: "ʇ",
        u: "n",
        v: "ʌ",
        w: "ʍ",
        x: "x",
        y: "ʎ",
        z: "z",
        A: "∀",
        B: "𐐒",
        C: "Ɔ",
        D: "ᗡ",
        E: "Ǝ",
        F: "Ⅎ",
        G: "⅁",
        H: "H",
        I: "I",
        J: "ſ",
        K: "Ʞ",
        L: "˥",
        M: "W",
        N: "N",
        O: "O",
        P: "Ԁ",
        Q: "Q",
        R: "ᴚ",
        S: "S",
        T: "⊥",
        U: "∩",
        V: "Λ",
        W: "M",
        X: "X",
        Y: "⅄",
        Z: "Z",
        "1": "Ɩ",
        "2": "ᄅ",
        "3": "Ɛ",
        "4": "ㄣ",
        "5": "ϛ",
        "6": "9",
        "7": "ㄥ",
        "8": "8",
        "9": "6",
        "0": "0",
        ".": "˙",
        ",": "'",
        "?": "¿",
        "!": "¡",
        '"': "„",
        "'": ",",
        "`": ",",
        "(": ")",
        ")": "(",
        "[": "]",
        "]": "[",
        "{": "}",
        "}": "{",
        "<": ">",
        ">": "<",
        "&": "⅋",
        _: "‾",
    };

    toView(value: string) {
        return value
            .split("")
            .map((char) => this.flipMap[char] || char)
            .reverse()
            .join("");
    }
}
```

```html
<p>${'Hello Aurelia!' | upsideDown}</p>
```

### 序数后缀值转换器

为数字追加一个序数后缀（例如：1st, 2nd, 3rd,等）。

```ts
import { valueConverter } from "aurelia";

@valueConverter("ordinal")
export class OrdinalValueConverter {
    toView(value: number) {
        const suffixes = ["th", "st", "nd", "rd"];
        const v = value % 100;
        return value + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
    }
}
```

```html
<p>${position | ordinal}</p>
```

### 摩斯代码转换器

转换文本为摩斯代码。

```ts
import { valueConverter } from "aurelia";

@valueConverter("morse")
export class MorseCodeValueConverter {
    private morseAlphabet = {
        A: ".-",
        B: "-...",
        C: "-.-.",
        D: "-..",
        E: ".",
        F: "..-.",
        G: "--.",
        H: "....",
        I: "..",
        J: ".---",
        K: "-.-",
        L: ".-..",
        M: "--",
        N: "-.",
        O: "---",
        P: ".--.",
        Q: "--.-",
        R: ".-.",
        S: "...",
        T: "-",
        U: "..-",
        V: "...-",
        W: ".--",
        X: "-..-",
        Y: "-.--",
        Z: "--..",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "0": "-----",
    };

    toView(value: string) {
        return value
            .toUpperCase()
            .split("")
            .map((char) => this.morseAlphabet[char] || char)
            .join(" ");
    }
}
```

```html
<p>${message | morse}</p>
```

这些有趣独特的数值转换器展示样例展示了 Aurelia 模板引擎的多样性和为开发者提供一个有趣动人的方式在学习自定义数值转换器的过程中。

::: danger 不懂的词汇
currency
[Leet Speak]
Upside
subsequent
applicable
imaginary
fictitious
wrap
singular
Furthermore
[fall apart quite quickly]
locale
slang
Flips
versatility
engaging
:::
