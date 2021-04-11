import colors from './colors.config.js'
export default {

  debug: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fume example title',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // try pulling in colors
  loading: {
    color: colors.blue,
    height: '10px',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    jit: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-tailvue', {all: true}],
    '@nuxtjs/axios',
  ],

  /*
  ** Runtime Config
  ** See https://nuxtjs.org/guide/runtime-config/
  */
  publicRuntimeConfig: {
    testVariable: process.env.TEST_VARIABLE,
    apiUrl: process.env.API_URL || 'http://localhost',
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
