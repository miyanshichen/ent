import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      direc
    },
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home/index.vue'),
      meta: {
        authToken: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/login/login.vue'),
      meta: {
        authToken: false
      }
    },
  ]
})