import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  nProgress.start()

  next()
})

router.afterEach(() => {
  nProgress.done()
})

export default router
