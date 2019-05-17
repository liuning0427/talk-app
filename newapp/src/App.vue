<template>
  <div id="app">
    <common-header :seachMenu="seachMenu" v-if="$store.state.show"></common-header>
    <router-view></router-view>
    <common-foot :menu="menu" :seachMenu="seachMenu" @change="fn" v-if="$store.state.show"></common-foot>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue'
import CommonFoot from '@/components/CommonFoot.vue'
export default {
  components:{
    CommonFoot,
    CommonHeader,
  },
  methods: {
    fn(index){
      // console.log(index);
      this.seachMenu = this.menu[index];
    }
  },
  data() {
    return {
      menu:[
        {
          name:'消息',
          path:'/xiaoxi'
        },{
          name:'联系人',
          path:'/people'
        },{
          name:'我的',
          path:'/mine'
        }
      ],
      seachMenu:[
        {
          name:'消息',
          path:'/xiaoxi'
        }
      ],
      headerShow: true
    }
  },
  
  created() {
    this.menu.forEach((obj,index) => {
      if(obj.path == this.$route.path){
        this.seachMenu = obj;
      }
    })
  },
}
</script>

<style>
  
</style>
