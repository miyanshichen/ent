import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()
console.log(123123)
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/home/index')
    }
  ]
})
export default router;


