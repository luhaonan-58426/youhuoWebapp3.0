<template>
    <div class="box">
        <p class="ptop">
            <span @click="onClickLeft"><img src="../../static/my/lr.png" alt=""></span>
            <span>商品列表</span>
            <span><img src="../../static/sy/cd.png" alt=""></span>
        </p>
        <div class="nav">
            <a @click="dboys" :class="{topnav:boysnum==1}">默认 <img src="../../static/productlist/sj.png" alt=""></a>
            <a @click="dgirls" :class="{topnav:girlsnum==1}">新品</a>
            <a @click="dkids" :class="{topnav:kidsnum==1}">人气</a>
            <a @click="dlifestyle" :class="{topnav:lifenum==1}">价格 <img src="../../static/productlist/jsx.png" alt=""></a>
            <a @click="dlife" :class="{topnav:stylenum==1}">筛选 <img src="../../static/productlist/sj.png" alt=""></a>
        </div>
        <div class="probox">
            <div class="pro" v-for="(val,i) in sungalsses" :key="i">
                <img :src="val.src" alt="">
                <p>{{val.title}}</p>
                <p> {{val.price}}<img class="priceimg" src="../../static/productlist/dd.png" alt=""></p>
            </div>
        </div>
        <span class="bottom">  </span>
    </div>
</template>

<script>
    export default {
        name: "productlist",
        methods:{
            onClickLeft() {
                window.history.go(-1)
            },
            dboys() {
                    this.boysnum=1,
                    this.girlsnum=0,
                    this.kidsnum=0,
                    this.lifenum=0,
                this.stylenum=0
            },
            dgirls() {
                    this.boysnum=0,
                    this.girlsnum=1,
                    this.kidsnum=0,
                    this.lifenum=0,
                        this.stylenum=0
            },
            dkids() {
                    this.boysnum=0,
                    this.girlsnum=0,
                    this.kidsnum=1,
                    this.lifenum=0,
                        this.stylenum=0
            },
            dlifestyle() {
                    this.boysnum=0,
                    this.girlsnum=0,
                    this.kidsnum=0,
                        this.stylenum=0
                    this.lifenum=1
            },
            dlife() {
                this.boysnum=0,
                    this.girlsnum=0,
                    this.kidsnum=0,
                    this.stylenum=1,
                    this.lifenum=0
            }
        },
        data(){
            return {
                boysnum:1,
                girlsnum:0,
                kidsnum:0,
                lifenum:0,
                stylenum:0,
                boys: true,
                girls: false,
                kids: false,
                lifestyle: false,
                sungalsses:[
                    {src:require("../../static/productlist/1.jpg"),title:"PENSOLE Chalk Yello太阳镜", price:"￥699.00"},
                    {src:require("../../static/productlist/2.jpg"),title:"PENSOLE Chalk Yello太阳镜", price:"￥699.00"},
                    {src:require("../../static/productlist/3.jpg"),title:"PENSOLE Chalk Yello太阳镜", price:"￥699.00"},
                    {src:require("../../static/productlist/4.jpg"),title:"PENSOLE Chalk Yello太阳镜", price:"￥699.00"},
                    {src:require("../../static/productlist/5.jpg"),title:"PENSOLE Chalk Yello太阳镜", price:"￥699.00"},
                    {src:require("../../static/productlist/6.jpg"),title:"PENSOLE Chalk Yello太阳镜", price:"￥699.00"},
                    {src:require("../../static/productlist/7.jpg"),title:"PENSOLE Chalk Yello太阳镜", price:"￥699.00"},
                    {src:require("../../static/productlist/8.jpg"),title:"PENSOLE Chalk Yello太阳镜", price:"￥699.00"},
                    {src:require("../../static/productlist/9.jpg"),title:"PENSOLE Chalk Yello太阳镜", price:"￥699.00"},
                    {src:require("../../static/productlist/10.jpg"),title:"PENSOLE Chalk Yello太阳镜", price:"￥699.00"},
                    {src:require("../../static/productlist/11.jpg"),title:"PENSOLE Chalk Yello太阳镜", price:"￥699.00"},
                    {src:require("../../static/productlist/12.jpg"),title:"PENSOLE Chalk Yello太阳镜", price:"￥699.00"},
                    {src:require("../../static/productlist/13.jpg"),title:"PENSOLE Chalk Yello太阳镜", price:"￥699.00"},
                    {src:require("../../static/productlist/14.jpg"),title:"PENSOLE Chalk Yello太阳镜", price:"￥699.00"},
                    {src:require("../../static/productlist/15.jpg"),title:"PENSOLE Chalk Yello太阳镜", price:"￥699.00"},
                    {src:require("../../static/productlist/16.jpg"),title:"PENSOLE Chalk Yello太阳镜", price:"￥699.00"}
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
            margin: 0.2rem 0;
        }
        .probox{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            .pro{
                width: 44%;
                display: inline-block;
                img{
                    width: 100%;
                }
                p{
                    .priceimg{
                        display: inline-block;
                        width: 0.2rem;
                        vertical-align: middle;
                        margin-left: 40%;
                    }
                }
            }
        }

        .bottom{
            display: block;
            padding-bottom: 0.8rem;
        }
    }
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
    .nav {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.02rem;
        text-align: center;
        .topnav{
            color: black;
            font-weight: 600;
        }
        a {
            width: 20%;
            background-color: white;
            color: grey;
            height: 0.35rem;
            line-height: 0.35rem;
            img{
                width: 0.13rem;
                vertical-align: middle;
            }
        }
    }

</style>