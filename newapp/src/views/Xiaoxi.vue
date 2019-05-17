<template>
    <div class="head">
        <div class="head-input">
            <input type="text" placeholder="搜索聊天记录" class="seach">
        </div>
       <div class="head-txt">
           <div class="head-img">
                <img src="../assets/pic/logo.png">  
           </div>
           <div class="content">
                <h3>联系人</h3>
                <span>最近聊天记录</span>
           </div>
           
       </div>
    </div>
</template>

<script>
    export default {
        created() {
            this.$store.state.show = true;
        }
    }
</script>

<style scoped>
    .seach{
        height: 0.5rem;
        width:90%;
        margin-top:0.2rem;
        border:1px solid #f2f2f2;
        background: #ffffff;
        outline: none; 
        text-align:center;
        position:fixed;
    }
    .head{
        padding:0 0.3rem;
        margin-top:1rem;
    }
    .head-input{
        width:100%;
        height:1rem;
    }
    .head-txt{
        display: flex;
        width:100%;
    }
    .head-img{
        flex:1;
        /* border:1px solid #000; */
    }
    img{
        border-radius:50%;
        border:1px solid #ccc; 
        width: 1rem;
        height: 1rem;
        outline:none;
    }
    .content{
        flex:4;
        margin-left:0.2rem;
    }
</style>