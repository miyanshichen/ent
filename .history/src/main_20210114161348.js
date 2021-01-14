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

Vue.config.productionTip = false
Vue.use(public_component)
Vue.prototype.$https = store.state.https;
Vue.prototype.$axios = store.state.https;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
