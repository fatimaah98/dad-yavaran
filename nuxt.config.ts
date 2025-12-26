// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    preset: 'github-pages'
  },
  css: ["./app/assets/styles/main.css"],
  vite: {
    plugins: [ tailwindcss()]
  },
  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl'
      }
    },
    baseURL: '/dad-yavaran/'
  },
  modules: ['@vueuse/motion/nuxt'],
})
