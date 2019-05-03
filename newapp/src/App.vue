<template>
  <div id="app">
    <foot></foot>
    <router-view></router-view>
  </div>
</template>

<script>
import Foot from '@/components/Foot.vue'
export default {
  components:{
    Foot
  },
  data() {
    return {
      list:[
        {
        name:'消息',
        path:'/'
      },{
        name:'联系人',
        path:'people'
      },{
        name:'记事本',
        path:'txt'
      }
      ]
    }
  }
}
</script>

<style>

</style>
