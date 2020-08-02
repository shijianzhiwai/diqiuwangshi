
module.exports = {
    title: '时间之外，地球往事',
    description: '时间之外，地球往事',
    theme: '@vuepress/theme-blog',
    themeConfig: {
        dateFormat: 'YYYY-MM-DD',
        sidebar: 'auto',
        search: true,
        searchMaxSuggestions: 10,
        nav: [
            {
                text: 'Blog',
                link: '/posts',
                path: 'blog/_posts'
            },
            {
                text: 'Tags',
                link: '/tag/',
            },
        ]
    }
 }