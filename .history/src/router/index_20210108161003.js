import VueRouter from "vue-router"
import Vue from "vue"
Vue.use()
const routes = [
  {
    path: '/home',
    components: resolve => require(['@/pages/home/index'], resolve)
  }
];
const router = createRouter({
  // 4. 采用hash 模式
  // history: createWebHashHistory(),
  // 采用 history 模式
  // history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router