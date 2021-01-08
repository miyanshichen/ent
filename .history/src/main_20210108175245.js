import { createApp } from 'vue'
import App from './App'
const app = createApp(App)
import router from './router/index'
import "./assets/css/style.css"
app.use(router)
app.mount('#app')
