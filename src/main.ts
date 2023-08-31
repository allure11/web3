import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "@/router";

const Vue = createApp(App)
Vue.use(router)
Vue.mount('#app')


