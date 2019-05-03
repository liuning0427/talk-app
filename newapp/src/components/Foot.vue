<template>
    <div>
        <div>
            <ul class="footer">
                <li>消息</li>
                <li>联系人</li>
                <li>记事本</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .footer{
        position: fixed;
        bottom:0;
        background: #00a801;
        height:1rem;
        width: 100%;
        display: flex;
    }
    .footer li{
        flex:1;
        font-size:0.3rem;
        text-align: center;
        line-height: 1rem;
    }
</style>