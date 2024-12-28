介绍 > Hello World

# 创建你的第一个应用

学习使用 Aurelia 的项目脚手架工具去创建你的第一个设置。

有各种各样的方法让你去设置一个 Aurelia 项目，包括在你 HTML 页面中添加一个简单的脚本标记去创建自定义 <a href="https://www.webpackjs.com/" target="blank">Webpack</a>配置，最简单而且最强大的方法是通过`makes`工具。

在你运行`makes`之前，你需要在你机器上安装一个最近的 Node.js 版本。如果你没有 Node.js，你可以从 <a href="https://nodejs.org/en/" target="blank">这里</a>下载，请确保 Node.js 已经是最新的版本如果你已经安装。

接下来，使用`npx`，一个与 Node.js 一起分发的工具。我们将创建一个新的 Aurelia 应用，打开命令脚本然后运行以下命令：

```
npx makes aurelia
```

`makes`将开启 Aurelia 项目向导，问你一些问题去帮你获取正确的设置。当输入了脚本，给你项目命名为"hello-world"然后选择默认的设置，ESNest(JavaScript)或者 TypeScript 都可以，取决于你的喜好。最后，选择"yes"去安装项目依赖。

你现在在没有写一行代码的情况下已经创建了一个 hello world 的应用，干得好！然而，我们将更新我们的项目去允许文本输入以至于我们可以说"hello"对下一章我们想说的人。

现在你已经有了一个可以设置运行，调试和部署的 Aurelia 的项目。为了确定每件事情都可以正常工作，`cd`到你的项目文件并运行`npm start`。你的项目将会编译且一个 web 浏览器将会打开，展示出"Hello World"的信息。

恭喜！🎊 你已经运行了你第一个 Aurelia 应用。现在，让我们构建他。

::: danger 不懂的词汇
scaffold
distributed
wizard
properly
:::
