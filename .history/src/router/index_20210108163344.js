import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: () => ('@/pages/home/index'], resolve)
    }
  ]
})
export default router;


