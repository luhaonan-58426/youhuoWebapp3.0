<template>
    <div class="all">
<div class="alllist" v-for="(val,i) in allclassify" :key="i">
    <img :src="val.src" alt="">
    <p>{{val.word}}</p>
</div>
    </div>
</template>

<script>
    export default {
        name: "allClassify",
        props:["allclassify"]
    }
</script>

<style scoped lang="scss">
.all{
    margin: 0.1rem 0 0.15rem 0;
  width: 100%;
  background-color: white;
    display: flex;
    justify-content: space-around;
}
    .alllist{
        width: 0.6rem;
        text-align: center;
        img{
            width:0.4rem;
        }
        p{
            font-size: 0.12rem ;
        }
    }

</style>
