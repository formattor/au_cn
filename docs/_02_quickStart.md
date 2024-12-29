介绍

# 快速开始

在你通过 Aurelia 创建应用之前，你需要满足一些前提条件。

## 介绍

Aurelia 被设计用来建立简单但 UI 丰富的 Web 应用,根据标语显示；简单，强大而且低调，你拥有开箱即用的所需的一切，可以开始构建共嗯那个丰富的 Web 应用。

这章的目标是给你一个简要的 Aurelia 如何工作的技术概述，但它并不打算成为一个教程或参考。如果你想找一个更好的 Aurelia 介绍你要画个几分钟去阅览<a href="./_04_0_helloWorld" target="blank">hello world 指南</a>。

::: danger 不懂的词汇
prerequisites
mantra
:::

## 核心概念

Aurelia 的核心概念是简单的；HTML，CSS 和 JS。虽然 Aurelia 确实引入了你要熟悉的自己的模板语言，但它是 HTML 的增强版，所以语法和概念你已经感觉很熟悉了。

::: danger 不懂的词汇
introduce
:::

### View models 和 Views

基础的 Aurelia 是 View-model 和 View 的概念。开箱即用，Aurelia 假设你的组件全都是由 view-model（.js 或.ts 文件）和伴随带有.html 文件后缀的 view 组成。

如果你使用过.NET 或其他使用相同概念的框架，你会很熟悉 view-model 和 view 的概念。view-model 包含业务逻辑和数据，view 主要负责显示它们。

像所有的 Aurelia 概念一样，这些是默认的惯例而且可以在你想要的时候修改它们。

::: danger 不懂的词汇
underpinning
accompanying
paradigm
:::

### 依赖注入

像其他晚上的 JS 框架一样，.NET，Aurelia 功能健壮的依赖注入系统允许你管理你应用内部的依赖。你在文档的其他地方会学到依赖注入的好处，但它在 Aurelia 中起着基本作用。

::: danger 不懂的词汇
robust
:::

## 安装 Node.js

创建一个 Aurelia 应用要通过 Makes 使用 Aurelia 脚手架，你需要确保你已经安装了 Node.js。推荐最新的 Node 版本，它是完美的。尽管我们可以通过不同的方法去安装 Node，但最简单的获取方式是从 <a href="https://nodejs.org/en/download/" target="blank">Node.js</a>官网。

## 创建应用

Aurelia 不要求你安装全局的 Node 包，取而代之的是使用 <a href="https://www.npmjs.com/package/makes" target="blank">Makes</a> 脚手架工具，通过运行以下命令新的 Aurelia 应用可以被生成。

```cmd
npx makes aurelia
```

你之后将会获取 Aurelia 脚手架工具提示，会首先问你项目名字，然后指导你一些选项。最快的方式去开始是选择 ESNest 或 TS 作为默认选项（1 和 2）。

我们非常推荐在新建 Aurelia 项目的时候选择 TS。TS 可以使你获取智能检测和类型安全。

## 运行应用

一旦脚手架进程完成而你在新应用中已经安装了相关依赖，运行`npm start`在你的项目目录，一个浏览器窗口将会打开你刚创建的新 Aurelia 项目。

## 开始深入？

看一下我们最开始友好必要的 Aurelia 的 [hello world](./_04_0_helloWorld.md) 介绍。如果你想研究的更深(也许你之前已经涉足 Aurelia)，我们有一系列更加棒的[指南](https://github.com/aurelia/aurelia/blob/master/docs/user-docs/getting-started/broken-reference/README.md) 。

::: danger 不懂的词汇
dive
obligatory
perhaps
dabbled
:::
