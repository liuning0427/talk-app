<template>
    <div class="login">
        <div class="login-box">
            <form action="">
                <label for="xx">username</label>
                <input type="text" class="input">
                <br>
                <label for="xx">password&nbsp;</label>
                <input type="password" class="input">
                <input type="button" value="注册" class="btn" @click="getin()">
                <input type="button" value="登录" class="btn" @click="getin()">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            getin(){
                this.$router.push('/xiaoxi')
            }
        },
        created() {
            this.$store.state.show = false
        },
    }
</script>

<style scoped>
    .login{
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background-image: url('../assets/pic/微信图片_20190509100312.jpg');
        background-size:100% 100%;
    }
    .login-box{
        width:5.5rem;
        height:2rem;
        border:2px solid rgba(225,225,224,0.7);
        border-radius: 10px;
        color:#fffff9;
        padding:0 0.2rem;
        position: relative;
        margin:70% auto;
    }
    .input{
        width:2rem;
        outline: none;
        margin-left:0.1rem;
        border:none;
    }
    .btn{
        width:1rem;
        height:0.5rem;
        margin-left:0.5rem;
        margin-top:0.1rem;
        border:none;
        color:#999;
        background: #f1f1f1;
        border-radius: 10px;
        outline:none;
    }
    form{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        padding-top:10px;
    }
    img{
        width:0.5rem;
        height:0.5rem;
        float:right;
        margin-top:0.1rem;
    }
</style>