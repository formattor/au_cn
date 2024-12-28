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
                href: "/logo.png",
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

        sidebar: [
            {
                text: "介绍",
                link: "/_01_introduction",
            },
            {
                text: "介绍",
                items: [
                    { text: "快速开始", link: "/_02_quickStart" },
                    { text: "致新开发者的Aurelia", link: "/_03_forDeveloper" },
                    {
                        text: "你好，世界",
                        link: "/_04_helloWorld",
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
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/aurelia/aurelia" },
        ],
    },
});
