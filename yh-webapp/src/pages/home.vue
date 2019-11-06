<template>
    <div>
      <headerbar></headerbar>
      <hswiper :bannerimg="banner"></hswiper>
      <all-classify :allclassify="allClassify"></all-classify>
      <footbar></footbar>
    </div>
</template>

<script>
  import footbar from "../components/footerbar/footbar";
  import headerbar from "../components/home/headerbar";
  import hswiper from "../components/home/hswiper";
  import allClassify from "../components/home/allClassify";
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
                ]
            }
        },
        components:{
            footbar,
            headerbar,
            hswiper,
            allClassify
        }
    }
</script>

<style scoped>
p{
  color: aquamarine;
}
</style>
