import  "vue-router"
const routes = [
  {
    path: '/',
    component: resolve => require(['@/'])
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