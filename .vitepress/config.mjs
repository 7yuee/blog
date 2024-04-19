import { defineConfig } from 'vitepress'
import nav from './nav.js'
import sidebar from './sidebar.js'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir:'notes',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav:nav,

    sidebar:sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
