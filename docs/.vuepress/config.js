module.exports = {
    base: '/',
    port: 8091,
    title: '0-1Learning',
    description: '',
    // 进阶配置VuePress 使用 markdown-it 来渲染 Markdown，上述大多数的拓展也都是通过自定义的插件实现的
    markdown: {
        // markdown-it-anchor 的选项，默认值: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' }
        // anchor: { permalink: false },
        // markdown-it-toc 的选项，默认值: { includeLevel: [2, 3] }
        toc: { includeLevel: [2, 3, 4, 5] },
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            // md.use(require('markdown-it-xxx'))
        },
        plugins: [
            '@vuepress/active-header-links', //页面滚动时自动激活侧边栏链接的插件
            '@vuepress/back-to-top',
            '@vuepress/last-updated'
        ]
    },
    //导航链接
    themeConfig: {
        logo: '',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
            // { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
            // { text: 'Guide', link: '/guide/', target:'_blank' }
            // {
            //     text: 'Languages',
            //     ariaLabel: 'Language Menu',
            //     items: [
            //         { text: 'Chinese', link: '/language/chinese/' },
            //         { text: 'Japanese', link: '/language/japanese/' }
            //     ]
            // }
        ],
        sidebar: {
            sidebar: 'auto'
        },
        // [// 没有自动左侧菜单的会使用此菜单
            // '/',
            // '/page-a',
            // ['/middleware/mysql', 'Explicit link text']
            //侧边栏分组，侧边栏的每个子组默认是可折叠的，你可以设置 collapsable: false 来让一个组永远都是展开状态。
            // {
            //     title: 'Group 1',   // 必要的
            //     path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            //     collapsable: false, // 可选的, 默认值是 true,
            //     sidebarDepth: 1,    // 可选的, 默认值是 1
            //     children: [
            //         '/'
            //     ]
            // },
        // ],
        // displayAllHeaders: true, // 显示所有页面的标题链接,默认值：false
        lastUpdated: 'Last Updated', // string | boolean
        smoothScroll: true, //页面滚动
    },
    // 多语言支持
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
            title: '0-1Learning',
            description: '0-1Learning'
        },
        '/en/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator'
        }
    }
}