import Vue from 'vue'
import Router from 'vue-router'
import One from '@/views/One.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      component: One
    }
  ]
})
