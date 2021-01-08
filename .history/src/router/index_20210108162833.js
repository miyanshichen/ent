import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: resolve => require(['@/pages/'])
    }
  ]
})
export default router;


