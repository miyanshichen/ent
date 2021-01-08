import { createApp } from 'vue'
import App from './App'
const app = createApp(App)
import router from './router/index'
import "./assets/css/style.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
app.use(router)
app.mount('#app')
