
module.exports = {
    title: '时间之外，地球往事',
    description: '时间之外，地球往事',
    theme: '@vuepress/theme-blog',
    themeConfig: {
        smoothScroll: true,
        dateFormat: 'YYYY-MM-DD',
        sidebar: 'auto',
        search: true,
        searchMaxSuggestions: 10,
        // directories: [
        //     {
        //         id: 'post',
        //         dirname: '_posts',
        //         path: '/',
        //     },
        //     {
        //         // Unique ID of current classification
        //         id: 'notes',
        //         // Target directory
        //         dirname: 'notes',
        //         // Path of the `entry page` (or `list page`)
        //         path: '/notes/',
        //       },
        // ],
        nav: [
            {
              text: 'Blog',
              link: '/',
            },
            {
              text: 'Tags',
              link: '/tag/',
            },
            {
              text: 'Notes',
              link: '/notes/',
            },
            {
                text: 'About',
                link: '/about',
            },
        ],
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/shijianzhiwai/',
                }
            ],
        },
    },
    markdown: {
        lineNumbers: true,
        toc: {
            "containerClass": "table-of-contents1", // vuepress 博客主题会把这个默认覆盖成 none，改个名
        }
    },
    plugins: {
        '@vuepress/back-to-top': {},
        // '@vuepress/medium-zoom': {
        //     selector: '.content__default :not(a) > img',
        // }
    }
 }