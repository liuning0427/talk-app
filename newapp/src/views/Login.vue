<template>
    <div class="login">
        <div class="login-box">
            <form action="">
                <label for="xx">UserName</label>
                <input type="text">
                <br>
                <label for="xx">PassWord</label>
                <input type="text">
                <img src="../assets/进入.png" @click="getin()">
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
                this.$router.push('/')
            }
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
        background-image: url('../assets/微信图片_20190509100312.jpg');
        background-size:100%;
    }
    .login-box{
        width:5.5rem;
        height:2rem;
        border:1px solid #ccc;
        color:#fffff9;
        padding:0 0.2rem;
        position: relative;
        margin:4rem auto;
    }
    input{
        outline: none;
        margin-left:0.1rem;
        border:none;
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