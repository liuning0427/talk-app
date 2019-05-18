<template>
    <div>
        <div class="header">
            <div class="header-img">
                <img src="@/assets/pic/mine.png" class="img"/>
            </div>
            <div class="header-span">
                <span>{{seachMenu.name}}</span>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">

    export default {
        props:['seachMenu'],
        
        data() {
            return {
                
            }
        },
        methods: {
           
        },
        created() {
            this.seachMenu.forEach((obj,index)=>{
                this.seachMenu.name = obj.name; //一跳转进来就显示name
            })
        },
    }
</script>

<style scoped>
    .header{
        background:#80beaf;
        height:1rem;
        text-align: center;
        position:fixed;
        top:0;
        left:0;
        right:0;
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