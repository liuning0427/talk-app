<template>
    <div>
        <div>
            <ul class="footer">
                <li v-for="(obj,index) in menu" :key="index" @click="$emit('change',index)">
                    <router-link :to="obj.path">{{obj.name}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props:['menu','seachMenu'],
        data() {
            return {
                
            }
        },
        methods: {
            
        },
    }
</script>

<style scoped>
    .footer{
        position: fixed;
        bottom:0;
        background: #ffffff;
        height:1rem;
        width: 100%;
        display: flex;
        position:fixed;
    }
    .footer li{
        flex:1;
        font-size:0.25rem;
        text-align: center;
        line-height: 1rem;
        border-top:1px solid rgba(225,225,220,1);
    }
    .footer a.router-link-active{
        color:#ccc;
        outline:none;
    }
</style>