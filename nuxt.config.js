require('dotenv').config()
const { QIITA_API_ACCESS_TOKEN, GITHUB_API_ACCESS_TOKEN } = process.env

export default {
  ssr: true,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jun-T',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Jun-T. Software Engineer in Hiroshima, Japan.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Jun-T' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://portfolio-nuxt-inky.vercel.app/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Jun-T',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Jun-T. Software Engineer in Hiroshima, Japan.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://portfolio-nuxt-inky.vercel.app/ogimage.png',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@prrr_343',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://portfolio-nuxt-inky.vercel.app/ogimage.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/composition-api'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
  ],
  tailwindcss: {
    jit: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/apollo', '@nuxtjs/pwa'],
  axios: {},
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js',
    },
  },

  manifest: {
    name: "Jun-T's Portfolio",
    short_name: 'Jun-T',
    theme_color: '#fcf0ee',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    interval: 2000,
  },

  env: {
    QIITA_API_ACCESS_TOKEN,
    GITHUB_API_ACCESS_TOKEN,
  },
}
