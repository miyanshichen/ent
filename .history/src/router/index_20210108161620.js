import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: "/home",
      name: "home",
      component: resolve => require(['@/pages/home/index'], resolve),
      meta: {
        authToken: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/pages/login/reg'], resolve),
      meta: {
        authToken: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/pages/login/login'], resolve),
      meta: {
        authToken: false
      }
    },
    {
      path: '/reset-password',
      name: 'resetPsd',
      component: resolve => require(['@/pages/login/resetpsd'], resolve),
      meta: {
        authToken: false
      }
    },
    {
      path: '/otc',
      name: 'otc',
      redirect: '/otc/buy/:id',
      component: resolve => require(['@/pages/otc/index'], resolve),
      children: [
        {
          path: '/otc/buy/:id',
          name: 'otcTrade',
          component: resolve => require(['@/pages/otc/buy'], resolve)
        },
        {
          path: '/otc/sell/:id',
          name: 'otcTrade',
          component: resolve => require(['@/pages/otc/sell'], resolve)
        }
      ]
    },
    {
      path: '/user/security',
      name: 'security',
      component: resolve => require(['@/pages/center/security'], resolve),
      meta: {
        authToken: true
      }
    },
    {
      path: '/user/vertified',
      name: 'vertified',
      component: resolve => require(['@/pages/center/vertified'], resolve),
      meta: {
        authToken: true
      }
    },
    {
      path: '/user/login-record',
      name: 'loginRecord',
      component: resolve => require(['@/pages/center/loginRecord'], resolve),
      meta: {
        authToken: true
      }
    },
    {
      path: '/news/list',
      name: 'NewsList',
      component: resolve => require(['@/pages/news/list'], resolve),
      meta: {
        authToken: false
      }
    },
    {
      path: '/news/details',
      name: 'NewsDetails',
      component: resolve => require(['@/pages/news/details'], resolve),
      meta: {
        authToken: false
      }
    },
    {
      path: '/finance/coin',
      name: 'FinanceCoin',
      component: resolve => require(['@/pages/finance/assets'], resolve),
      meta: {
        authToken: true
      }
    },
    {
      path: '/finance/deposit',
      name: 'Deposit',
      component: resolve => require(['@/pages/finance/deposit'], resolve),
      meta: {
        authToken: true
      }
    },
    {
      path: '/finance/withdraw',
      name: 'Withdraw',
      component: resolve => require(['@/pages/finance/withdraw'], resolve),
      meta: {
        authToken: true
      }
    },
    {
      path: '/finance/address',
      name: 'Address',
      component: resolve => require(['@/pages/finance/address'], resolve),
      meta: {
        authToken: true
      }
    },
    {
      path: '/exchange',
      name: 'Exchange',
      component: resolve => require(['@/pages/exchange/exchange'], resolve),
      meta: {
        authToken: true
      }
    }
  ]
})