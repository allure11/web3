import {createRouter, createWebHashHistory, RouterOptions} from "vue-router";
import Login from '@/pages/login/index.vue'
export const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    {path:'/login',component:Login},
    {path:'/',redirect:'/login'}
  ]
} as RouterOptions)

