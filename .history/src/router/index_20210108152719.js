import  "vue-router"
const routes = [
  {
    path: '/home',
    componentx: resolve => require(['@/pages/home/index'], resolve)
  }
];
// const router = createRouter({
//   // 4. 采用hash 模式
//   history: createWebHashHistory(),
//   // 采用 history 模式
//   // history: createWebHistory(),
//   routes, // short for `routes: routes`
// });

export default routes