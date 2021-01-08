import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
  {
    path: '/home',
    components: resolve => require(['@/pages/home/index'], resolve)
  }
];
// const router = createRouter({
//   // 4. 采用hash 模式
//   // history: createWebHashHistory(),
//   // 采用 history 模式
//   // history: createWebHistory(),
//   routes, // short for `routes: routes`
// });
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router