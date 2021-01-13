import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
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
    {
      path: '/register',
      name: 'Reg',
      component: () => import('./views/login/register.vue'),
      meta: {
        authToken: false
      }
    },
    {
      path: '/findPsd',
      name: 'FindPsd',
      component: () => import('./views/login/findPsd.vue'),
      meta: {
        authToken: false
      }
    },
    {
      path: '/personal/index',
      name: 'Personal',
      component: () => import('./views/personal/index.vue'),
      meta: {
        authToken: true
      }
    },
    {
      path: '/finance/assets',
      name: 'Assets',
      component: () => import('./views/assets/assets.vue'),
      meta: {
        authToken: true
      }
    },
    {
      path: '/finance/deposit',
      name: 'Deposit',
      component: () => import('./views/assets/deposit.vue'),
      meta: {
        authToken: true
      }
    },
    {
      path: '/finance/deposit/logs',
      name: 'DepositLogs',
      component: () => import('./views/assets/depositLogs.vue'),
      meta: {
        authToken: true
      }
    },
  ]
})
