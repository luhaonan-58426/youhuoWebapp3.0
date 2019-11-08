<template>
    <swipe class="my-swipe">
        <swipe-item v-for="(imgsrc,i) in hotbanner" :key="i" class="slide1"><img :src="imgsrc.src" alt=""></swipe-item>
    </swipe>
</template>

<script>
    export default {
        name: "hotswiper",
        props:["hotbanner"],
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
    .my-swipe {
        height:1.2rem;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }
    .slide1>img{
        width: 100%;
        height: 100%;
    }

</style>
