import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Aurelia.cn",
    description: "A VitePress Site",
    head: [
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "../public/logo.png",
            },
        ],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "../public/header.svg",
        siteTitle: "",
        nav: [
            { text: "Home", link: "/" },
            { text: "Examples", link: "/markdown-examples" },
        ],

        sidebar: [
            {
                text: "介绍",
                link: "/introduction",
            },
            {
                text: "介绍",
                items: [
                    { text: "快速开始", link: "/markdown-examples" },
                    { text: "致新开发者的Aurelia", link: "/api-examples" },
                    {
                        text: "你好，世界",
                        link: "/api-examples",
                        items: [
                            { text: "创建你第一个应用", link: "/api-examples" },
                        ],
                        collapsed: true,
                    },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
    },
});
