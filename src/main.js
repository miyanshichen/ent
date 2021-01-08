import { createApp } from 'vue'
import App from './App'
const app = createApp(App)
import router from './router/index'
import "./assets/css/style.css"
import './plugins/element.js'
app.use(router)
app.mount('#app')
