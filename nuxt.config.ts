// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      bodyAttrs: {
        class: 'm-0 p-0 font-sans font-light antialiased min-h-screen'
      },
      htmlAttrs: {
        class: 'scroll-smooth'
      },
      script: [
        {
          src: 'https://app.lemonsqueezy.com/js/lemon.js',
          defer: true,
        },
      ],
    }
  },

  compatibilityDate: '2025-03-01'
})