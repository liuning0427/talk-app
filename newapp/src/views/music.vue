<template>
    <div>
        <div class="head">
            <div class="head-left" @click="getTo()">
                <img src="../assets/pic/return.png" class="return">
                <span class="return-span">返回</span>
            </div>
            <span class="mypic">播放列表</span>
        </div>
    </div>
</template>

<script>
    export default {
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
</style>