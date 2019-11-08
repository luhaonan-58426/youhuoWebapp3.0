<template>
    <div>
      <headerbar></headerbar>
      <hswiper :bannerimg="banner"></hswiper>
      <all-classify :allclassify="allClassify"></all-classify>
        <img class="hotimg" :src="hot.img" alt="">
        <p class="hotl">{{hot.hotl}}</p>
<!--        <img class="hotimg" src="../../static/sy/1111.jpg" alt="">-->
        <products :product="products"></products>
        <hotswiper :hotbanner="hotbanner"></hotswiper>
        <p class="hotl">{{hot.hotp}}</p>
        <allproduct :allproduct="allproduct" ></allproduct>
      <footbar></footbar>
    </div>
</template>

<script>
  import footbar from "../components/footerbar/footbar";
  import headerbar from "../components/home/headerbar";
  import hswiper from "../components/home/hswiper";
  import allClassify from "../components/home/allClassify";
  import allproduct from "../components/home/allproduct";
  import products from "../components/home/products";
  import hotswiper from "../components/home/hotswiper"
    export default {
        name: "home",
        data(){
            return {
                banner:[
                    {src:require("../../static/sy/ts1.jpg")},
                    {src:require("../../static/sy/ts2.jpg")},
                    {src:require("../../static/sy/ts3.jpg")},
                    {src:require("../../static/sy/ts4.jpg")},
                    {src:require("../../static/sy/ts5.jpg")},
                    {src:require("../../static/sy/ts6.jpg")},
                    {src:require("../../static/sy/ts7.jpg")},
                    {src:require("../../static/sy/ts8.jpg")}
                ],
                allClassify:[
                    {word:"新品到着",src:require("../../static/sy/ac1.png")},
                    {word:"人气搭配",src:require("../../static/sy/ac2.png")},
                    {word:"折扣专区",src:require("../../static/sy/ac3.png")},
                    {word:"全部分类",src:require("../../static/sy/cd.png")}
                ],
                hot:{
                    img:require("../../static/sy/1111.jpg"),
                    hotl:"热门品类",
                    hotp:"热门品牌"
                },
                hotbanner:[
                    {src:require("../../static/sy/s1.jpg")},
                    {src:require("../../static/sy/s3.jpg")},
                    {src:require("../../static/sy/s4.jpg")},
                    {src:require("../../static/sy/s5.jpg")},
                    {src:require("../../static/sy/s6.jpg")}
                ],
                products:[
                    {src:require("../../static/sy/pr1.jpg")},
                    {src:require("../../static/sy/pr2.jpg")},
                    {src:require("../../static/sy/pr3.jpg")},
                    {src:require("../../static/sy/pr4.jpg")},
                    {src:require("../../static/sy/pr5.jpg")},
                    {src:require("../../static/sy/pr6.jpg")},
                    {src:require("../../static/sy/pr7.jpg")},
                    {src:require("../../static/sy/pr8.jpg")},
                    {src:require("../../static/sy/pr9.jpg")},
                    {src:require("../../static/sy/pr10.jpg")},
                    {src:require("../../static/sy/pr11.jpg")},
                    {src:require("../../static/sy/pr12.jpg")}
                ],
                allproduct:{
                    onlyshop:[
                        {src:require("../../static/sy/sd1.jpg")},
                        {src:require("../../static/sy/sd2.jpg")},
                        {src:require("../../static/sy/sd3.jpg")},
                        {src:require("../../static/sy/sd4.jpg")},
                        {src:require("../../static/sy/sd5.jpg")},
                        {src:require("../../static/sy/sd6.jpg")}
                    ],
                    twoshop:{src:require("../../static/sy/sd8.png")}
                }
            }
        },
        components:{
            footbar,
            headerbar,
            hswiper,
            allClassify,
            allproduct,
            products,
            hotswiper
        }
    }
</script>

<style scoped lang="scss">
.hotimg{
    display: block;
    border: none;
    width: 100%;
    background-color:  #f0f0f0;
    padding: 0.15rem 0 0;
}
    .hotl{
        text-align: center;
        height: 0.4rem;
        line-height: 0.4rem;
        background-color: #f0f0f0;
    }
</style>
