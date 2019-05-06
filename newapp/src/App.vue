<template>
  <div id="app">
    <common-header></common-header>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue'
import Foot from '@/components/Foot.vue'
export default {
  components:{
    CommonHeader,
    Foot
  },
  // data() {
  //   return {
  //     list:[
  //       {
  //       name:'消息',
  //       path:'/'
  //     },{
  //       name:'联系人',
  //       path:'/people'
  //     },{
  //       name:'记事本',
  //       path:'/txt'
  //     }
  //     ]
  //   }
  // }
}
</script>

<style>

</style>
