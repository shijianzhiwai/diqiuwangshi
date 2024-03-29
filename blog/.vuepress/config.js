
module.exports = {
    title: '时间之外，地球往事',
    description: '时间之外，地球往事',
    // theme: '@vuepress/theme-blog',
    themeConfig: {
        smoothScroll: true,
        dateFormat: 'YYYY-MM-DD',
        sidebar: 'auto',
        search: true,
        searchMaxSuggestions: 10,
        globalPagination: {
            lengthPerPage: 10,
        },
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
              text: 'Rust',
              link: '/rust/',
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
            "markerPattern": /^\[toc\]/im,
        },
        extendMarkdown: md => {
            const sanitize = require('sanitize-filename')
            const wikilinks = require('@kwvanderlinde/markdown-it-wikilinks')({
                linkPattern: /\[\[([\w\s-(\u4e00-\u9fa5)/]+)(\|([\w\s/]+))?\]\]/,
                postProcessPageName: (pageName) => {
                    pageName = pageName.trim()
                    pageName = pageName.split('/').map(sanitize).join('/')
                    pageName = pageName.replace(/\s+/g, '-')
                    return pageName.toLowerCase()
                },
                postProcessLabel: (label) => {
                    label = label.trim()
                    return "[[ " + label + " ]]"
                }
            })
            md.use(wikilinks)
        },
    },
    plugins: {
        '@vuepress/back-to-top': {},
        // '@vuepress/medium-zoom': {
        //     selector: '.content__default :not(a) > img',
        // }
    }
 }