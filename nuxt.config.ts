// https://v3.nuxtjs.org/api/configuration/nuxt.config

// import { defineNuxtPlugin } from '#app'

export default defineNuxtConfig({
  ssr: false,
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    '@pinia/nuxt'
  ],
  imports: {
    dirs: [
      'stores'
    ]
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  }
})
