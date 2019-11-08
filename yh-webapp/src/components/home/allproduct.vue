<template>
    <div class="box">
        <img class="onlyshop" v-for="(src,i) in allproduct.onlyshop" :src="src.src" alt="">
        <img class="twoshop" :src="allproduct.twoshop.src" alt="">
    </div>
</template>

<script>
    export default {
        name: "allproduct",
        props:["allproduct"]
    }
</script>

<style scoped lang="scss">
.box{
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    padding-bottom: 0.6rem;
    .onlyshop{
        width:24.6%;
        height: 0.9rem;
        padding-top: 0.02rem;
    }
    .twoshop{
        width: 49.7%;
        padding-top: 0.02rem;
    }
}
</style>