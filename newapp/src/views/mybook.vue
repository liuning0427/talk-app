<template>
    <div>
        <div class="head">
            <div class="head-left" @click="getTo()">
                <img src="../assets/pic/return.png" class="return">
                <span class="return-span">返回</span>
            </div>
            <span class="mypic">我的图书</span>
        </div>
        <h4>猜你喜欢</h4>
        <div class="body">
            <swipe class="my-swipe">
                <swipe-item class="slide1"></swipe-item>
                <swipe-item class="slide2"></swipe-item>
                <swipe-item class="slide3"></swipe-item>
            </swipe>
            <h5>我最近阅读的图书</h5>
            <div class="book">
                <div class="left">
                    <img src="../assets/pic/9.jpg"/>
                </div>
                <div class="right">
                    <h3>《满足》</h3>
                    <p>作者</p>
                    <p>年份</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
require('vue-swipe/dist/vue-swipe.css');
    export default {
        components:{
            Swipe,
            SwipeItem
        },
        created() {
            this.$store.state.show = false;
        },
        methods: {
            getTo(){
                this.$router.push('/mine');
            }
        },
    }
</script>

<style scoped>
    .head{
        height:1rem;
        width:100%;
        background: #80beaf;
        margin-top:0;
        position:fixed;
        top:0;
        right:0;
        left:0;
        display:flex;
    }
    .head-left{
        flex:1;
    }
    .return{
        width:0.4rem;
        height:0.4rem;
        margin:0.3rem 0.1rem;
    }
      .return-span{
        color:#fff;
        line-height:1rem;
        font-size:0.3rem;
        /* margin-left:0.3rem; */
    }
    .mypic{
        color:#fff;
        font-size:0.4rem;
        flex:1.75;
        line-height:1rem;
    }
    .my-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }

    .slide1 {
        background-image: url(../assets/pic/14.jpg);
        color: #fff;
        background-size:cover;
    }
    .slide2 {
        background-image: url(../assets/pic/17.jpg);
        color: #000;
        background-size:cover;
    }

    .slide3 {
        background-image: url(../assets/pic/16.jpg);
        color: #fff;
        background-size:cover;
    }
    .body{
        background: #fff;
    }
    h5,h4{
        height:0.6rem;
        text-align:center;
        line-height: 0.6rem;
        color:#aaa;
    }
    h4{
        margin-top:1rem;
    }
    .book{
        height:3rem;
        display:flex;
        border:1px solid #ccc;
        background: #fcf9f9;
    }
    .left{
        flex:1;
    }
    .left img{
        width:2rem;
        height: 3rem;
    }
    .right{
        flex:2;
    }
</style>