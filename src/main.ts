import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "@/router";
import 'element-plus/dist/index.css'

const Vue = createApp(App)
Vue.use(router)
Vue.mount('#app')


