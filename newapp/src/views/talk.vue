<template>
    <div>
        <div class="head">
            <router-link to="/xiaoxi"> 
            <span style="font-size:15px;
                        margin-left:10px;
            " class="back">首页</span></router-link>
            <span class="ing">与xxx正在聊天中</span>
        </div>
        <div class="body">
            <input type="text">
            <button><p>+</p></button>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            this.$store.state.show = false;
        },
    }
</script>

<style scoped>
    .head{
        width:100%;
        height:15%;
        background: #fffdf3;
        border:1px solid #f1f1f1;
        line-height: 60px;
    }
    .ing{
        position:fixed;
        left:50%;
        transform: translateX(-50%);
        font-size:20px;
        font-family: 'Times New Roman', Times, serif;
    }
    .body{
        position: fixed;
        bottom:10px;
        width:90%;
        left:50%;
        transform: translateX(-50%);
        display:flex;
        height:40px;
        border-top:1px solid #ccc;
    }
    input{
        margin-top:0.2rem;
        height:27px;
        flex:8.5;
        border-radius:10px;
        border:1px solid #ccc;
    }
    button{
        margin-top:0.2rem;
        border-radius: 50%;
        padding-left:10px;
        flex:0.5;
        border:none;
        background: #fffdf3;
    }
    p{
        font-size: 25px;
    }
</style>