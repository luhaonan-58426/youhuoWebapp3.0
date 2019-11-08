<template>
    <div class="box">
        <img v-for="(val,i) in product" :key="i" :src="val.src" alt="">
    </div>
</template>

<script>
    export default {
        name: "products",
        props:["product"]
    }
</script>

<style scoped lang="scss">
.box{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #f0f0f0;
    padding-bottom: 0.15rem;
    img{
        display: block;
        border: #f0f0f0 1px solid;
        width:24.45%;
    }
}
</style>