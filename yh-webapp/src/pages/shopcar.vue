<template>
  <div>
    <p>购物车</p>
    <moreproduct></moreproduct>
    <footbar></footbar>
  </div>
</template>

<script>
    import footbar from "../components/footerbar/footbar";
    import moreproduct from "../components/moreproduct";
    export default {
        name: "shopcar",
        components:{
            footbar,
          moreproduct
        }
    }
</script>

<style scoped>

</style>
