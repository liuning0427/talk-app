<template>
    <div>
        <router-link to="/mine/myphoto">
            <v-touch class="head" :style="{backgroundImage:'url('+url+')'}" @swipeleft="next()" />
        </router-link>
    </div>
</template>

<script>
import Vue from 'vue'
// var VueTouch = require('vue-touch')
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
    export default {
        components:{
            VueTouch
        },
        created() {
            this.$store.state.show = false;
        },
        computed: {
            url(){
                return this.$store.state.photoData[this.idx].src
            }
        },
        methods: {
            getReturn(){
                this.$router.push('/mine/myphoto');
            },
            next(){
                this.idx++;
                if(this.idx == this.$store.state.photoData.length){
                    this.idx = 0;
                }
            },
        },
        data() {
            return {
                idx:this.$route.params.index
            }
        },
    }
</script>

<style scoped>
    .head{
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background:#000 center center no-repeat;
        background-size: contain;
    }
</style>