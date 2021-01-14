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
import https from './plugins/https'

Vue.config.productionTip = false
Vue.use(public_component)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
