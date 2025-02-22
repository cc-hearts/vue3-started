import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: setupLayouts(routes),
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

export const setup = ({ app }: { app: App }) => {
  if (__IS_DEV__) {
    console.log(routes)
  }

  app.use(router)
}
