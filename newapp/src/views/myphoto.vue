<template>
    <div>
        <div class="head">
            <div class="head-left" @click="getTo()">
                <img src="../assets/pic/return.png" class="return">
                <span class="return-span">返回</span>
            </div>
            <span class="mypic">我的相册</span>
        </div>
        <div class="body">
            <div class="img">
            <img :src="obj.src" v-for="(obj,index) in photoList" :key="index">
        </div>
        <div class="loading"  v-show="isLoading">
            <img src="../assets/pic/loading.gif">
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        created() {
            axios.get('/data/photodata.json')
            .then((result)=>{
                this.photoList = result.data.photoData;
                // console.log(result);
                this.isLoading=false
            })
            this.$store.state.show = false;
        },
        data() {
            return {
                photoList:[],
                isLoading:true
            }
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
    .body{
        margin-top:1rem;
    }
    img{
        width:50%;
        object-fit: cover;
        /* background-size: cover; */
        height: 3rem;
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
</style>