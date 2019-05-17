<template>
    <div>
        <div class="header">
            <div class="head">
                <img src="../assets/pic/mine.png" class="mine" @click="fn()"/>
                <change v-show="show"></change>
                <span class="head-span">我的昵称</span>
            </div>
            <div class="body">
                <div @click="getin()" class="body-div">
                    <img src="../assets/pic/photo.png" class="img">
                    <span class="body-span">我的相册</span>
                </div>
                <div @click="getto()" class="body-div">
                    <img src="../assets/pic/music.png" class="img" >
                    <span class="body-span">我的音乐</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import change from '@/views/change.vue'
    export default {
        components:{
            change
        },
        data() {
            return {
                show:false
            }
        },
        methods: {
            getin(){
                this.$router.push('/mine/myphoto');
            },
            getto(){
                this.$router.push('/mine/music')
            },
            fn(){
                this.show=!this.show
            }
        },
        created() {
            this.$store.state.show = true;
        },
    }
</script>

<style scoped>
    .header{
        margin-top:1rem;
    }
    .head{
        height: 1.5rem;
    }
    .color{
        background: #ccc;
    }
    .mine{
        width:1.5rem;
        height:1.5rem;
        padding:0 0.3rem;
    }
    .head-span{
        font-size:0.5rem;
        line-height: 1.5rem;
        position: absolute;
        top:1rem;
        left:2rem;
    }
    .body{
        margin-top:5px;
        padding:2px 20px;
    }
    .body-span{
        font-size:0.3rem;
        margin-left:0.2rem;
    }
    .img{
        width:0.5rem;
        height: 0.5rem;
    }
    .body-div{
        border-top:1px solid #ccc;
        padding:0.1rem 0;
    }
</style>