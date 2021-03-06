import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/style.css"
import "./assets/font/iconfont.js"
import "./assets/font/iconfont.css"
import 'element-ui/lib/theme-chalk/display.css';
import './plugins/element.js'
import public_component from './components/index.js'
import axios from './plugins/axios'
import i18n from './plugins/i18n'

Vue.config.productionTip = false
Vue.use(public_component)
Vue.prototype.$https = store.state.https;
Vue.prototype.$axios = axios;

router.beforeEach((to, from, next) => {
  if (to.meta.authToken) {
    if (store.state.token) {
      axios.defaults.headers["Authorization"] =
        "Bearer " + store.state.token;
      next()
    } else {
      next('/login')
    }
  } else {
    next();
  }
})

i18n.locale = localStorage.getItem('lang') || 'zh-cn';

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
