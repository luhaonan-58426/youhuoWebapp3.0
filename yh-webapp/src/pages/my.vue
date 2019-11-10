<template>
  <div>
    <p>我的</p>
    <moreproduct></moreproduct>
    <footbar></footbar>
  </div>
</template>

<script>
    import footbar from "../components/footerbar/footbar";
    import moreproduct from "../components/moreproduct";
    export default {
        name: "my",
        components:{
            footbar,
          moreproduct
        }
    }
</script>

<style scoped>

</style>
