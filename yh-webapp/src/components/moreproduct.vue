<template>
    <div class="box">
        <p class="p">为你优选新品</p>
        <div class="pro" v-for="(val,i) in product" :key="i">
            <img :src="val.src" alt="">
            <p>{{val.title}}</p>
            <p> {{val.price}}<img src="" alt=""></p>
        </div>
        <span class="bottom">  </span>
    </div>
</template>

<script>
    export default {
        name: "moreproduct",
        data(){
            return {
                product:[
                    {src:require("../../static/shopcar/1.webp"),title:"PENSOLE Chalk Yello跑鞋", price:"￥699.00"},
                    {src:require("../../static/shopcar/2.webp"),title:"PENSOLE Chalk Yello跑鞋", price:"￥699.00"},
                    {src:require("../../static/shopcar/3.webp"),title:"PENSOLE Chalk Yello跑鞋", price:"￥699.00"},
                    {src:require("../../static/shopcar/4.webp"),title:"PENSOLE Chalk Yello跑鞋", price:"￥699.00"},
                    {src:require("../../static/shopcar/5.webp"),title:"PENSOLE Chalk Yello跑鞋", price:"￥699.00"},
                    {src:require("../../static/shopcar/6.webp"),title:"PENSOLE Chalk Yello跑鞋", price:"￥699.00"},
                    {src:require("../../static/shopcar/7.webp"),title:"PENSOLE Chalk Yello跑鞋", price:"￥699.00"},
                    {src:require("../../static/shopcar/8.webp"),title:"PENSOLE Chalk Yello跑鞋", price:"￥699.00"},
                    {src:require("../../static/shopcar/9.webp"),title:"PENSOLE Chalk Yello跑鞋", price:"￥699.00"},
                    {src:require("../../static/shopcar/10.webp"),title:"PENSOLE Chalk Yello跑鞋", price:"￥699.00"},
                    {src:require("../../static/shopcar/11.webp"),title:"PENSOLE Chalk Yello跑鞋", price:"￥699.00"},
                    {src:require("../../static/shopcar/12.webp"),title:"PENSOLE Chalk Yello跑鞋", price:"￥699.00"}
                 ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .box{
        width: 100%;
        .p{
            text-align: center;
        }
        .pro{
            width: 50%;
            display: inline-block;
            img{
                width: 100%;
            }
        }
        .bottom{
            display: block;
            padding-bottom: 0.8rem;
        }
    }


</style>