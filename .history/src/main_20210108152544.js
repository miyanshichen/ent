import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)
App.use(router)

createApp(App).mount('#app')
