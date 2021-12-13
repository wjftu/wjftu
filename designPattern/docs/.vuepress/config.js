module.exports={
  title: "设计模式",
  description: "设计模式",
  base: "/note/designPattern/",
  themeConfig: {
    sidebarDepth: 2,

    nav: [
      { text: 'Home', link: '/' },
      { text: '创建者模式', link: '/creational/' },
      { text: '结构型模式', link: '/structural/' },
      { text: '行为型模式', link: '/behavioural/' },
      // { text: 'LeetCode', link: '/leetcode/' },
    ],
    sidebar: {
      // '/': ['','creational','structural','behavioural'],
      '/creational/': ['','singleton','factory'],
      '/structural/': ['','proxy'],
      '/behavioural/': ['','template_method'],
      // '/leetcode/': ['','tree','hashtable','linkedlist']
    }


  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-155045877-1' // UA-00000000-0
      }
    ]
  ],
  dest: '../public/note/designPattern'
}
