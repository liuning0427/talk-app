<template>
  <div id="app">
    <common-header></common-header>
    <router-view></router-view>
    <common-foot :menu="menu" :seachMenu="seachMenu"></common-foot>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue'
import CommonFoot from '@/components/CommonFoot.vue'
export default {
  components:{
    CommonFoot,
    CommonHeader
  },
  data() {
    return {
      menu:[
        {
          name:'消息',
          path:'/'
        },{
          name:'联系人',
          path:'/people'
        },{
          name:'我的',
          path:'/txt'
        }
      ],
      seachMenu:[
        {
          name:'消息',
          path:'/'
        }
      ]
    }
  },
}
</script>

<style>

</style>
