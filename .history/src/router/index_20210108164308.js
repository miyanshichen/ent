import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/index.vue'
const routerHistory = createWebHistory()
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


