module.exports={
    title: "算法刷题",
    description: "算法笔记，剑指 Offer 、 leetcode 题解",
    base: "/note/algorithmPractice/",
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: '剑指 Offer', link: '/CodingInterviews/' },
          { text: 'LeetCode', link: '/leetcode/' },
        ],
        sidebar: {
          '/codingInterviews/': ['','3','4','5','6','7','8','9','10','11'],
          '/leetcode/': ['','tree','hashtable','linkedlist']
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
  dest: '../public/algorithmPractice'
}