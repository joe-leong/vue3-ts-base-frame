import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import removeConsole from 'vite-plugin-remove-console'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'
import { visualizer } from 'rollup-plugin-visualizer'
const {
  npm_package_dependencies_vue: vueVersion,
  npm_package_dependencies_vue_router: routerVersion,
  npm_package_dependencies_pinia: piniaVersion,
  npm_package_dependencies_dayjs: dayjsVersion
} = process.env

function standardVersion(
  version: string,
  dep: string,
  fileName: string
): string {
  return `https://cdnjs.cloudflare.com/ajax/libs/${dep}/${version.replace(
    '^',
    ''
  )}/${fileName}`
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    visualizer(),
    vue(),
    removeConsole(),
    importToCDN({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: standardVersion(
            vueVersion,
            'vue',
            'vue.runtime.global.prod.min.js'
          )
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: standardVersion(
            routerVersion,
            'vue-router',
            'vue-router.global.prod.min.js'
          )
        },
        {
          name: 'vue-demi',
          var: 'VueDemi',
          path: standardVersion('0.13.11', 'vue-demi', 'index.iife.js')
        },
        {
          name: 'pinia',
          var: 'Pinia',
          path: standardVersion(piniaVersion, 'pinia', 'pinia.iife.prod.min.js')
        },
        {
          name: 'dayjs',
          var: 'dayjs',
          path: standardVersion(dayjsVersion, 'dayjs', 'dayjs.min.js')
        }
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
