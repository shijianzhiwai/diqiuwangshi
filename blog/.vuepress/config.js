
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
        nav: [
            {
              text: 'Blog',
              link: '/',
            },
            {
              text: 'Tags',
              link: '/tag/',
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
    plugins: [
        '@vuepress/back-to-top'
    ]
 }