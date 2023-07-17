import { defineConfig } from 'vitepress'
const path = require('path');

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Habit UI",
  description: "해빗팩토리 디자인시스템 베타",
  head: [
    ['script', { crossorigin: 'anonymous', src: 'https://kit.fontawesome.com/3ad716f299.js' }],
    ['link', { rel: 'icon', type: 'image/png', href: `https://habitfactory.co/public/images/hf-ico.png` }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '시작하기', link: '/guide/' },
    ],

    sidebar: [
      { text: '시작하기', link: '/guide/' },
      {
        text: 'Components',
        items: [
          { text: '레이아웃', link: '/layout/' },
          { text: '버튼', link: '/button/' },
          { text: '체크박스', link: '/checkbox/' },
          { text: '이모지', link: '/emoji/' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/signalfinlab/habit-ui' }
    ]
  },
  vite: {
    resolve: {
      alias: {
        '@styles': path.resolve(__dirname, './styles'),
        '@components': path.resolve(__dirname, './components'),
      },
    }
  }
})
