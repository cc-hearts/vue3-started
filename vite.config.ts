import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig((args) => {
  const IS_DEV = args.mode === 'dev'
  const IS_PROD = args.mode === 'prod'

  return {
    base: './',
    define: {
      __IS_DEV__: IS_DEV,
      __IS_PROD__: IS_PROD,
    },
    plugins: [
      vue({
        include: [/\.vue$/],
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: './auto-imports.d.ts',
        eslintrc: {
          enabled: true,
        },
      }),
      vueJsx(),
      UnoCSS(),
      Layouts({
        layoutsDirs: 'src/layouts',
      }),
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        fullInstall: true,
      }),
      VueRouter({
        importMode: 'async',
        extensions: ['.vue', '.tsx'],
        routesFolder: [{ src: 'src/pages' }],
      }),
    ],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  }
})
