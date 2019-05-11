<template>
    <div>
        <div>
            <div class="head">
                <!-- <swipe class="my-swipe">
                    <swipe-item class="slide1"></swipe-item>
                    <swipe-item class="slide2"></swipe-item>
                    <swipe-item class="slide3"></swipe-item>
                </swipe> -->
                <img src="../assets/logo.png" class="mine">
                <span>我的昵称</span>
            </div>
            <div class="body">
                
            </div>
        </div>
    </div>
</template>

<script>
// require('vue-swipe/dist/vue-swipe.css');
// import { Swipe, SwipeItem } from 'vue-swipe';
    export default {
        // components:{
        //     Swipe,
        //     SwipeItem
        // }
    }
</script>

<style scoped>
    .mine{
        width:2rem;
        height:2rem;
    }
    span{
        font-size:0.5rem;
    }
    /* .my-swipe {
        height: 0.55rem;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }

    .slide1 {
        background-color: #0089dc;
        color: #fff;
    }

    .slide2 {
        background-color: #ffd705;
        color: #000;
    }

    .slide3 {
        background-color: #ff2d4b;
        color: #fff;
    } */
</style>