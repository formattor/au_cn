import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/au_cn/",
    title: "Aurelia.cn",
    description: "A VitePress Site",
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "logo.png",
            },
        ],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "/header.svg",
        siteTitle: "",
        nav: [
            { text: "首页", link: "/" },
            { text: "官网", link: "https://aurelia.io/" },
        ],

        outlineTitle: "概要",

        outline: [2, 3],

        // lastUpdated: {},

        docFooter: { prev: "向左", next: "向右" },

        // footer: { message: "test", copyright: "tt" },

        search: { provider: "local", options: {} },

        sidebar: [
            {
                text: "介绍",
                link: "/_01_introduction",
            },
            {
                text: "介绍",
                items: [
                    { text: "快速开始", link: "/_02_quickStart" },
                    {
                        text: "面向新开发者的 Aurelia",
                        link: "/_03_forDeveloper",
                    },
                    {
                        text: "Hello World",
                        link: "/_04_0_helloWorld",
                        items: [
                            {
                                text: "创建你第一个应用",
                                link: "/_04_1_firstApp",
                            },
                            {
                                text: "你的第一个组件 - 第一部分：view model",
                                link: "/_04_2_componentViewModel",
                            },
                            {
                                text: "你的第一个组件 - 第二部分：view",
                                link: "/_04_3_componentView",
                            },
                            {
                                text: "运行我们的应用",
                                link: "/_04_4_runApp",
                            },
                            {
                                text: "下一步",
                                link: "/_04_5_nextStep",
                            },
                        ],
                        collapsed: true,
                    },
                ],
            },
            {
                text: "模板",
                items: [
                    {
                        text: "模板语法",
                        link: "/_05_0_templateSyntax",
                        items: [
                            {
                                text: "属性绑定",
                                link: "/_05_1_attrBinding",
                            },
                            {
                                text: "事件绑定",
                                link: "/_05_2_eventBinding",
                            },
                            {
                                text: "文本插值",
                                link: "/_05_3_textInterpolation",
                            },
                            {
                                text: "模板Promises",
                                link: "/_05_4_templatePromises",
                            },
                            {
                                text: "模板引用",
                                link: "/_05_5_templateRef",
                            },
                            {
                                text: "模板变量",
                                link: "/_05_6_templateVar",
                            },
                            {
                                text: "全局",
                                link: "/_05_7_globals",
                            },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "自定义属性",
                        link: "/_06_customAttr",
                    },
                    {
                        text: "数值转换器（管道）",
                        link: "/_07_pipes",
                    },
                    {
                        text: "绑定行为",
                        link: "/_08_bindingBehavior",
                    },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/aurelia/aurelia" },
        ],
    },
});
