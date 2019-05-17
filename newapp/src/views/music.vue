<template>
    <div>
        <div class="loading"  v-show="isLoading">
            <img src="../assets/pic/loading.gif">
        </div>
        <div class="head">
            <div class="head-left" @click="getTo()">
                <img src="../assets/pic/return.png" class="return">
                <span class="return-span">返回</span>
            </div>
            <span class="mypic">播放列表</span>
        </div>
        <div class="body">
            <aplayer autoplay
                :music="music"
                :list="musicData"
                showlrc
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Aplayer from 'vue-aplayer'
    export default {
        computed: {
            music(){
                return this.musicData[0];
            }
        },
        data() {
            return {
                musicData:[],
                isLoading:true
            }
        },
        components:{
            Aplayer
        },
        created() {
            this.$store.state.show = false;
            axios.get('/data/musicdata.json')
            .then((result)=>{
                result.data.musicData.forEach((obj)=>{
                   let obj1 = {
                       title:obj.title,
                       author:obj.author,
                       src:obj.src,
                       pic:obj.musicImgSrc,
                       lrc:`http://localhost:8080/${obj.lrc}`
                   }
                   this.musicData.push(obj1);
                   this.isLoading=false;
               })
            })
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
    .body{
        margin-top:1rem;
        margin-left:0;
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