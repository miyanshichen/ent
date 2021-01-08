import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})

作者：杭州程序员张张
链接：https://www.imooc.com/article/304187/
来源：慕课网
本文原创发布于慕课网 ，转载请注明出处，谢谢合作
