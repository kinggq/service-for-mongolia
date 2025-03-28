// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/i18n',
    '@unocss/nuxt',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
  ],

  i18n: {
    locales: [
      {
        code: 'zh',
        iso: 'zh-CN',
        name: '中文',
        file: 'zh.json'
      },
      {
        code: 'mn',
        iso: 'mn-MN',
        name: 'Монгол',
        file: 'mn.json'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json'
      }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'mn',
    detectBrowserLanguage: {
      useCookie: true, // 使用 Cookie 记住用户语言
      cookieKey: 'i18n_redirected', // 记录语言的 Cookie 名称
      alwaysRedirect: false, // 禁止自动跳转
      fallbackLocale: 'mn' // 默认回退语言
    }
  },

  app: {
    head: {
      title: '蒙古-中国跨境服务平台',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '蒙古-中国跨境服务平台，提供商务车包车、商品采购、旅游服务等一站式解决方案' },
        { name: 'keywords', content: '蒙古,中国,跨境服务,商务车包车,商品采购,旅游服务,进出口服务' },
        { name: 'author', content: '蒙古-中国跨境服务平台' },
        { property: 'og:title', content: '蒙古-中国跨境服务平台' },
        { property: 'og:description', content: '蒙古-中国跨境服务平台，提供商务车包车、商品采购、旅游服务等一站式解决方案' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'mn_MN' },
        { property: 'og:site_name', content: '蒙古-中国跨境服务平台' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: '蒙古-中国跨境服务平台' },
        { name: 'twitter:description', content: '蒙古-中国跨境服务平台，提供商务车包车、商品采购、旅游服务等一站式解决方案' }
      ]
    }
  },

  compatibilityDate: '2025-03-27',

  typescript: {
    strict: true,
    typeCheck: 'build',
    shim: false
  }
})
