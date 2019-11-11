<template>
  <div>
    <p class="ptop">
      <span @click="onClickLeft"><img src="../../static/my/lr.png" alt=""></span>
      <span>购物车</span>
    </p>
    <div class="pro">
      <p class="p1">请您先<button style="font-size: 0.16rem">登录</button>可以同步电脑和手机中的商品</p>
      <img src="../../static/shopcar/spc.png" alt="">
      <p class="p2">您的购物车暂无商品</p>
      <button class="button" style="font-size: 0.16rem">随便逛逛</button>
    </div>
    <moreproduct></moreproduct>
<!--    <footbar></footbar>-->
  </div>
</template>

<script>
    // import footbar from "../components/footerbar/footbar";
    import moreproduct from "../components/moreproduct";
    // import { NavBar  } from 'vant';
    export default {
        name: "shopcar",
        components:{
            // footbar,
          moreproduct
          // [NavBar.name]:NavBar
    },
      methods: {
        onClickLeft() {
          window.history.go(-1)
        }
      }
    }
</script>

<style scoped lang="scss">
  .ptop{
    line-height: 0.5rem;
    background-color: #333333;
    color: #f0f0f0;
    display: flex;
    justify-content: flex-start;
    span{
      width: 44%;
      img{
        width: 0.3rem;
        vertical-align: middle;
        margin: 0 0.1rem;
      }
    }
  }
.pro{
  text-align: center;
  width: 100%;
  background-color: #f0f0f0;
  margin: 0.1rem 0 0.2rem;
  img{
    display: block;
    width: 1rem;
    margin: 0.4rem auto 0.1rem;
  }
  .p1{
    line-height: 0.3rem;
    button{
      height: 0.26rem;
      line-height: 0.2rem;
      vertical-align: middle;
      background-color: red;
      color: #f0f0f0;
      border: none;
    }
  }
  .button{
    margin:0.05rem 0rem 0.2rem;
    padding: 0 0.15rem;
    background-color: #333333;
    border: none;
    color: #f0f0f0;
    line-height: 0.3rem;
  }
}
</style>
