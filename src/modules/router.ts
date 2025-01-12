import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '~pages'

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export const setup = ({ app }: { app: App }) => {
  if (__IS_DEV__) {
    console.log(routes)
  }
  app.use(router)
}
