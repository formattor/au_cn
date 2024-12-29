介绍

# 面向新开发者的 Aurelia

刚接触 JavaScript,Node.js 和前端开发？别担心，我懂你。

欢迎来到 JavaScript 开发的魔法世界。这个指南是针对于任何刚入门的没有使用现代工具或者 JS 框架开发经验的前端开发者。

## 开始

本教程的目的以及根据任何一款像 Aurelia 一样的现代框架的通用规则，你将使用某种终端。在 Windows 上，你可以使用 Command Prompt 或者 Powershell。在 MacOS 上，你可以使用 Terminal(或其他可选的终端)，Linux 上也是一样的。

使用 Aurelia 你需要安装 Node.js，如果你是 Node.js 的新用户，那么它拥有被当前前端系统使用的所有工具，从 Webpack 到其他小众打包和工具。它支撑着前端系统。

最简单的方法去安装 Node.js 是从[官网](https://nodejs.org/en/download/)。下载适合你操作系统的安装包然后按照提示安装。

## 下载代码编辑器

为了写代码，你需要一款编辑器帮助你。在 JS 开发中最受欢迎的选择是[Visual Studio Code](https://code.visualstudio.com/)。它是微软制作的完全免费和开源的代码编辑器，会很好的支持 Aurelia 应用和 Node.js。

## 新建一个 Aurelia 项目

我们将跟着[快速安装指南](./_02_quickStart.md)的介绍去启动一个新的 Aurelia 项目。在安装 Node.js 之后，你不需要安装其他其他任何东西就可以创建新的 Aurelia 应用，现在让我们看看怎么做。

打开终端并运行以下命令：

```cmd
npx makes aurelia
```

当你执行命令的时候会出现一些选项。不要担心，我们会一步步来。

### 第一步：项目命名

你将会被要求为你的项目输入一个名字，可以是你想的任何名字，如果你想不到那么只输入`my-app`然后点击 enter 键就可以了。

### 第二步：选择你的选项

在第二步将会展示给你三个选项。

-   选项一："Default ESNext Aurelia 2 App"，这是一个基础的 Aurelia 2 JS 应用，使用 Babel 编译和 Webpack 打包。

-   选项二："Default Typescript Aurelia 2 App"，这是一个基础的 Aurelia 2 TS 应用，使用 Webpack 打包。

-   选项三："Default Typescript Aurelia 2 App" ，没有默认，你选择所有东西。

在这个指南中，我们选择最直观的选项，选项一。

### 第三步：安装依赖

你将会被问是否想要安装 Npm 依赖，答案是 Yes。本篇指南我们使用 Npm, 所以选择选项二。

根据你网络连接速度，可能会花一些时间。

### 第四步：运行简单的应用

再安装完成之后，你将会看到一小块黑色的标题，"开始"跟着介绍。首先，`cd my-app`到我们安装应用的目录内。然后运行`npm start`去运行我们的应用示例。

你的浏览器将会自动打开指向链接 `http://localhost:9000`

你的任何在`src`目录下的文件的更新都会造成开发服务器刷新页面。编辑`my-app.html`而且保存去看一下浏览器刷新，酷！

## 构建你的应用

最后的部分我们创建一个新应用而且运行在开发服务器中，但是你构建和部署你网站的"real world"是生产环境。

通过你终端窗口运行 Npm build 命令：

```cmd
npm run build
```

这将在生产环境下构建你的应用并创建一个新文件夹叫`dist`。

::: danger 不懂的词汇
alternative
bundler
underpin
transpiling
straightforward
:::
