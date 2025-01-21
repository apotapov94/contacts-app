// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  nitro: {
    experimental: {
      database: true
    },
    database: {
      contacts: {
        connector: 'sqlite',
        options: { name: 'contacts' }
      },
    }
  },
  css: ['~/assets/scss/main.scss']
})