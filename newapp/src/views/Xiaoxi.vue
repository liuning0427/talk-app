<template>
    <div>
       <div class="header">
            <div class="header-img">
                <input type="image" class="img">
            </div>
            <div class="header-span">
                <span>消息</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .header{
        height: 1.5rem;
        background:#80beaf;
        /* text-align: center; */
        display: flex;
    }
    .header-span{
        font-size:0.4rem;
        color:#fff;
        line-height: 1.5rem;
        flex:2;
    }
    .header-img{
        flex:1;
        margin-top:0.25rem;
        margin-left:0.5rem;
    }
    .header .img{
        width: 1rem;
        height: 1rem;
    }
</style>