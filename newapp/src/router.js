import Vue from 'vue'
import Router from 'vue-router'
import Xiaoxi from '@/views/Xiaoxi.vue'
import People from '@/views/People.vue'
import Txt from '@/views/Txt.vue'
import Login from '@/views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/xiaoxi',
      component: Xiaoxi
    },{
      path:'/people',
      component: People
    },{
      path:'/txt',
      component: Txt
    },{
      path:'/',
      component: Login
    }
  ]
})
