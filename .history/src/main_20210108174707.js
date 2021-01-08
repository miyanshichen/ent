import { createApp } from 'vue'
import App from './App'
import router from './router/index'
import "./assets/css/style.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
const app = createApp(App)
app.use(router)
app.use(ElementUI)
app.mount('#app')
