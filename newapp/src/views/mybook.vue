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
            <h5>我的书架</h5>
            <div class="book" v-for="(obj,index) in bookList" :key="index">
                <div class="left">
                    <img :src="obj.imageSrc"/>
                </div>
                <div class="right">
                    <div class="h3">
                        <h3>{{obj.title}}</h3>
                    </div>
                    <p>{{obj.author}}</p>
                    <p>{{obj.year}}</p>
                </div>
            </div>
            <div class="loading"  v-show="isLoading">
                <img src="../assets/pic/loading.gif">
            </div>
        </div>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from 'axios';
require('vue-swipe/dist/vue-swipe.css');
    export default {
        data() {
            return {
                bookList:[],
                isLoading:true
            }
        },
        components:{
            Swipe,
            SwipeItem
        },
        created() {
            axios.get(" https://www.easy-mock.com/mock/5cefdbee525314372dffa2dd/book-list/book-list")
            .then((result) => {
                console.log(result);
                this.bookList = result.data.bookList,
                this.isLoading=false
            })
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
        z-index: 1;
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
        font-size:0.35rem;
        flex:1.5;
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
    p,h3{
        margin:15px 5px;
    }
    .h3{
        width:180px;
        height:50px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .loading{
        background: rgba(0,0,0,0.3);
        width:0.5rem;
        height:0.5rem;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .loading img{
        width:0.5rem;
        height:0.5rem;
    }
</style>