<template>
    <div>
        <div class="xiaoxi">
            <input type="text" placeholder="搜索您的联系人" class="people">
            <span>在此显示您的联系人</span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    span{
        font-size:0.3rem;
        color:#999;
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .xiaoxi{
        text-align:center;
        /* position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0; */
        padding:0 0.3rem;
    }
    .people{
        height: 0.5rem;
        width:100%;
        margin-top:0.2rem;
        border:1px solid #f2f2f2;
        background: #ffffff;
        outline: none; 
        text-align:center;
    }
</style>