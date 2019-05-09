<template>
    <div>
        <div class="header">
            <div class="header-img">
                <img src="@/assets/logo.png" class="img" @click="fn()">
            </div>
            <div class="header-span">
                <span>消息</span>
            </div>
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
            fn(){
                this.$router.push('/login')
            }
        },
    }
</script>

<style scoped>
    .header{
        background:#80beaf;
        height:1rem;
        text-align: center;
    }
    .header-span{
        font-size:0.35rem;
        color:#fff;
        line-height: 1rem;
        margin-top:0;
    }
    .header .img{
        position:absolute;
        top:0.15rem;
        left:0.2rem;
        width: 0.7rem;
        height: 0.7rem;
    }
</style>