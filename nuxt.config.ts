// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css    : ['~/assets/scss/main.scss'],
  postcss: {
    plugins: {
      tailwindcss : {},
      autoprefixer: {}
    }
  },
  devtools: { enabled: true },
  modules : ['nuxt-icon', '@pinia/nuxt', '@nuxt-alt/proxy'],
  pinia   : {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  },
  proxy: {
    proxies: {
      '^/api-web/.*': {
        target      : process.env.NUXT_BASE_URL,
        changeOrigin: true,
        rewrite     : (path:string) => path.replace(/^\/api-web/, 'public')
      }
    }
  },
  runtimeConfig: {
    apiBaseUrl   : process.env.NUXT_BASE_URL,
    apiAcessToken: process.env.NUXT_ACCESS_TOKEN,
    secretAes    : process.env.NUXT_SECRET,
    rsaPub       : process.env.NUXT_RSA_PUBLIC_KEY,
    rsa          : process.env.NUXT_RSA_PRIVATE_KEY
  },
  typescript: {
    strict: true
  },
  ssr: true
})
