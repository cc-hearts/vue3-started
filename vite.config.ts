import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Pages from 'vite-plugin-pages'
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
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        fullInstall: true,
      }),
      Pages({
        dirs: [
          {
            dir: 'src/pages',
            baseRoute: '',
            filePattern: IS_PROD ? '**/!(*.dev).vue' : undefined,
          },
        ],
        resolver: 'vue',
        extensions: ['vue', 'md'],
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
