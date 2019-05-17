import Vue from 'vue'
import Router from 'vue-router'
import Xiaoxi from '@/views/Xiaoxi.vue'
import People from '@/views/People.vue'
import Mine from '@/views/mine.vue'
import Login from '@/views/Login.vue'
import MyPhoto from '@/views/myphoto.vue'
import Music from '@/views/music.vue'
import MyBook from '@/views/mybook.vue'

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
      path:'/mine',
      component: Mine
    },{
      path:'/',
      component: Login
    },{
      path:'/mine/myphoto',
      component:MyPhoto
    },{
      path:'/mine/music',
      component:Music
    },{
      path:'/mine/mybook',
      component: MyBook
    }
  ]
})
