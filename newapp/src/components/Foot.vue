<template>
    <div>
        <div>
            <ul class="footer">
                <li>
                    <router-link to="/">消息</router-link>
                </li>
                <li>
                    <router-link to="/people">联系人</router-link>
                </li>
                <li>
                    <router-link to="/txt">记事本</router-link>
                </li>
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
        background: #80beaf;
        height:1rem;
        width: 100%;
        display: flex;
    }
    .footer li{
        flex:1;
        font-size:0.3rem;
        text-align: center;
        line-height: 1rem;
        border:1.5px solid;
        border-color:transparent #ccc transparent transparent;
    }
</style>