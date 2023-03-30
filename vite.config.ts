import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import removeConsole from 'vite-plugin-remove-console'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    removeConsole(),
    importToCDN({
      modules: [
        // {
        //   name: 'vue',
        //   var: 'vue',
        //   path: 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.global.prod.min.js'
        // }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '#': resolve(__dirname, './src/types'),
      utils: resolve(__dirname, './src/utils'),
      apis: resolve(__dirname, './src/apis')
    }
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  },
  css: {}
})
