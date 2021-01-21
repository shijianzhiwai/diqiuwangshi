
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
    plugins: {
        '@vuepress/back-to-top': {},
        '@vuepress/medium-zoom': {
            selector: '.content__default :not(a) > img',
        }
    }
 }