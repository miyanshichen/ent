import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
const routes = [
  {
    path: "/",
    redirect: '/countIndex'
  },
  { path: "/countIndex", component: countIndex },
  { path: "/langshanIndex", component: langshanIndex },
  { path: "/screen", component: ScreenIndex },
];