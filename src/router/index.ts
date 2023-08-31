import {createRouter, createWebHashHistory, RouterOptions} from "vue-router";
import Login from '@/pages/login/index.vue'
import Home from '@/pages/home/index.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/login', component: Login},
    {path: '/home', component: Home},
    {path: '/', redirect: '/home'}
  ]
} as RouterOptions)

