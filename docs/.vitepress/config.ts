import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'Script Happens',
  description: 'Coding chaos documented.',
  // Enable search functionality
  themeConfig: {
    // Logo in the nav bar
    logo: '/logo.svg',
    
    // Nav bar links
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],
    
    // Sidebar configuration
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/' }
          ]
        },
        {
          text: 'JavaScript Fundamentals',
          items: [
            { text: 'JavaScript Basics', link: '/guide/javascript-basics' },
            { text: 'JavaScript Functions', link: '/guide/javascript-functions' },
            { text: 'JavaScript Conditionals', link: '/guide/javascript-conditionals' },
            { text: 'JavaScript Arrays and Loops', link: '/guide/javascript-arrays-loops' }
          ]
        },
        {
          text: 'Practical JavaScript',
          items: [
            { text: 'JavaScript Web Projects', link: '/guide/javascript-web-projects' }
          ]
        },
        {
          text: 'Advanced Topics',
          items: [
            { text: 'Intermediate JavaScript', link: '/guide/intermediate-javascript' },
            { text: 'Advanced JavaScript', link: '/guide/advanced-javascript' }
          ]
        }
      ]
    },
    
    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/askpravin' }
    ],
    
    // Enable search
    search: {
      provider: 'local'
    },
    
    // Footer configuration
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023'
    }
  }
})
