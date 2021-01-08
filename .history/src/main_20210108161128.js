import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
