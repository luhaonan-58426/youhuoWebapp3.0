<template>
    <div class="newest">
        <swipe class="my-swiper">
            <swipe-item class="slide1" v-for="(src,i) in data[0].banner" :key="i">
                <img :src="src.bannerimg" alt="">
            </swipe-item>
        </swipe>
        <div class="toppro" v-for="(main,i) in data[1].toppro" :key="i">
            <img :src="main.src" alt="" class="mainimg">
            <p>{{main.title}}</p>
            <p>{{main.name}}</p>
            <p>搭配|{{main.lnum}}人阅读
                <span>{{main.dnum}}
                    <img class="dz" src="../../../static/stroll/dz.png" alt="">
                </span>
            </p>
            <div class="botpro">
                <div v-for="(all,i) in main.botpro">
                    <img :src="all.img" alt="">
                    <div>
                        <p>{{all.title}}</p>
                        <p>{{all.price}}</p>
                    </div>
                </div>
            </div>
        </div>
        <span class="bottom">  </span>
    </div>
</template>

<script>
    export default {
        name: "newest",
        props:["data"],
        data(){
            return {
                // img:'',
            }
        },
        mounted() {
            // this.img = this.data[0].banner
            // console.log{data}
        }
    }
</script>

<style scoped lang="scss">
.newest{
    width: 100%;
}
.my-swiper {
    height:1.8rem;
    width: 100%;
    color: #fff;
    font-size: 30px;
    text-align: center;
}
.slide1>img{
    width: 100%;
    height: 100%;
}
.slide1{
    background-image: url("../../../static/stroll/top1.jpg");
}
    .mainimg{
        width: 100%;
        margin: 0.1rem 0;
    }
    .dz{
        width: 0.23rem;
        vertical-align: middle;
    }
    .toppro{
        p{
            line-height: 0.26rem;
            padding-left: 0.2rem;
        }
    }
    .botpro{
        margin-left: 15px;
        overflow-x: auto;
        white-space:nowrap;
        width: auto;
        div{
            display: inline-block;
            font-size: 10pt;
            border-radius: 3px;
            background-color: #f0f2f5;
            color: #686868;
            padding: 2px 10px;
            margin:0.2rem 0.1rem;
            img{
                display: inline-block;
                vertical-align: middle;
            }
            div{
                /*width: 50%;*/
                display: inline-block;
            }
        }

    }
    .bottom{
        display: block;
        padding-bottom: 0.8rem;
    }
/*::-webkit-scrollbar {*/
/*    display: none;*/
/*}*/
</style>