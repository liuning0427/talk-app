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
  }
}
</script>

<style>

</style>
