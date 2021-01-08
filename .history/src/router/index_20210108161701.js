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
    }
  ]
    
})