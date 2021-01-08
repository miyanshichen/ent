import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: () => import('@/pages/home/index')
    }
  ]
})
export default router;


