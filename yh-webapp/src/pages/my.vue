<template>
  <div>
    <div class="box">
      <p class="ptop">
        <span @click="onClickLeft"><img src="../../static/my/lr.png" alt=""></span>
        <span>个人中心</span>
        <span><img src="../../static/sy/cd.png" alt=""></span>
      </p>
      <div class="dl">
<button>登录/注册</button>
      </div>
      <p class="mrp men"><span>默认购物频道</span><span>男士MEN ></span></p>
      <p class="mrp"><span>我的订单</span><span>全部订单 ></span></p>
      <ul class="ul1">
        <li>
          <img src="../../static/my/dfk.png" alt="">
          <p>待付款</p>
        </li>
        <li>
          <img src="../../static/my/df.png" alt="">
          <p>待付款</p>
        </li>
        <li>
          <img src="../../static/my/dsh.png" alt="">
          <p>待付款</p>
        </li>
      </ul>
      <ul class="ul2">
        <li>
          <p>0</p>
          <p>待付款</p>
        </li>
        <li>
          <p>0</p>
          <p>待付款</p>
        </li>
        <li>
          <p>0</p>
          <p>待付款</p>
        </li>
      </ul>
      <p class="yh"><span class="yhimg"><img src="../../static/my/yyh.png" alt="">优惠券</span> <span> > </span></p>
      <p class="yh"><span class="yhimg"><img src="../../static/my/yhb.png" alt="">有货币</span> <span> > </span></p>
      <p class="yh"><span class="yhimg"><img src="../../static/my/xx.png" alt="">消息</span> <span> > </span></p>
      <p class="yh"><span class="yhimg"><img src="../../static/my/fu.png" alt="">服务与反馈</span> <span> > </span></p>
      <img class="zimg" src="../../static/my/1.jpg" alt="">
      <img class="zimg" src="../../static/my/2.jpg" alt="">
      <img class="zimg" src="../../static/my/3.png" alt="">
    </div>
    <moreproduct></moreproduct>
<!--    <footbar></footbar>-->
  </div>
</template>

<script>
    // import footbar from "../components/footerbar/footbar";
    import moreproduct from "../components/moreproduct";
    export default {
        name: "my",
        components:{
            // footbar,
          moreproduct
        },
        methods:{
            onClickLeft() {
                window.history.go(-1)
            }
        }
    }
</script>

<style scoped lang="scss">
.box{
    background-color: #f0f0f0;
   .ptop{
       line-height: 0.5rem;
       background-color: #333333;
       color: #f0f0f0;
       display: flex;
       justify-content: space-between;
       span>img{
           width: 0.3rem;
           vertical-align: middle;
           margin: 0 0.1rem;
       }
   }
    .dl{
        width: 100%;
        height: 1.5rem;
        text-align: center;
        background-image: url("../../static/my/header-bg.jpg");
        background-size: 100% 100%;
        background-color: white;
        button{
            margin: 0.6rem 0;
            border: white solid 0.01rem;
            color: white;
            background-image: url("../../static/my/header-bg.jpg");
            background-size: 150% 150%;
            padding: 0.05rem 0.2rem;
            font-size: 0.16rem;
        }
    }
    .zimg{
        width: 100%;
    }
    .ul1{
        display: flex;
        justify-content: space-around;
        padding: 0.1rem 0;
        /*border-bottom: #333333 solid 0.01rem;*/
        margin: 0.02rem 0;
        background-color: white;
        li{
            text-align: center;
            img{
                width: 35%;
            }
        }
    }
    .ul2{
        display: flex;
        justify-content: space-around;
        padding: 0.1rem 0;
        background-color: white;
        margin-bottom: 0.02rem;
        li{
            text-align: center;
        }
    }
    .yh{
        display: flex;
        justify-content: space-between;
        line-height: 0.3rem;
        padding: 0.05rem 0;
        margin-bottom: 0.015rem;
        /*border-bottom: #333333 solid 0.01rem;*/
        background-color: white;
        span{
            margin: 0 0.15rem;
        }
        .yhimg{
            img{
                width: 0.26rem;
                height: 0.26rem;
                vertical-align: middle;
            }
        }
    }
    .mrp{
        display: flex;
        justify-content: space-between;
        line-height: 0.3rem;
        padding: 0.05rem 0;
        background-color: white;
        margin-bottom: 0.02rem;
        /*border-bottom: #333333 solid 0.01rem;*/
        span{
            margin: 0 0.15rem;
        }
    }
    .men{
        margin-bottom: 0.15rem;
    }
}
</style>
