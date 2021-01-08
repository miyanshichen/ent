import { createApp } from 'vue'
import App from './App'
const app = createApp(App)
import router from './router/index'
import "./assets/css/style.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
app.p
app.use(ElementUI)
app.use(router)
app.mount('#app')
