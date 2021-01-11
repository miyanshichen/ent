import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/style.css"
import './plugins/element.js'
import public

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
