<template>
    <div class="classify">
        <input type="text" placeholder="搜索商品">
        <div class="nav" v-for="(item,index) in list" :key="index" @click="tab(index)">
            <a>{{item.title}}</a>
            <div class="bottom" v-show="item.rightshow">
                <ul>
                    <li  v-for="(lnav,index) in item.leftnav" @click="lanv(index)">
                        {{lnav.tab}}
                        <ul v-show="lnav.show">
                            <li v-for="(rtit,index) in lnav.title">
                                {{rtit.righttit}}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <!--        <div v-for="(item,index) in list" @click="tab(index)" class="boys alls">-->
        <!--            <ul>-->
        <!--                <li></li>-->
        <!--            </ul>-->
        <!--        </div>-->
        <!--        <div @click="dgirls" class="girls alls"></div>-->
        <!--        <div @click="dkids" class="kids alls"></div>-->
        <!--        <div @click="dlifestyle" class="lifestyle alls"></div>-->
        <footbar></footbar>
    </div>
</template>

<script>
    import footbar from "../components/footerbar/footbar";
    let obj=[
        {title:"Boys","rightshow":true,leftnav:[
                {"tab":"推荐","show":true,"title":[
                        {"righttit":"全部推荐"},
                        {"righttit":"上衣推荐"}
                    ]},
                {"tab":"上衣","show":false,"title":[
                        {"righttit":"shangyi"},
                        {"righttit":"jfaijk"}
                    ]},
                {"tab":"裤装","show":false,"title":"3333"},
                {"tab":"鞋靴","show":false,"title":"3333"},
                {"tab":"包类 / 装备","show":false,"title":"3333"},
                {"tab":"服配","show":false,"title":"3333"},
                {"tab":"有食","show":false,"title":"3333"},
                {"tab":"有玩","show":false,"title":"3333"},
                {"tab":"美妆 / 个护","show":false,"title":"3333"}
            ]},
        {title:"Girls","rightshow":false,leftnav:[
                {"tab":"推荐","show":true,"title":[
                        {"righttit":"全部推荐"},
                        {"righttit":"上衣推荐"}
                    ]},
                {"tab":"上衣","show":false,"title":[
                        {"righttit":"shangyi"},
                        {"righttit":"jfaijk"}
                    ]},
                {"tab":"裤装","show":false,"title":"3333"},
                {"tab":"鞋靴","show":false,"title":"3333"},
                {"tab":"包类 / 装备","show":false,"title":"3333"},
                {"tab":"服配","show":false,"title":"3333"},
                {"tab":"有食","show":false,"title":"3333"},
                {"tab":"有玩","show":false,"title":"3333"},
                {"tab":"美妆 / 个护","show":false,"title":"3333"}
            ]},
        {title:"Kids","rightshow":false,leftnav:[
                {"tab":"推荐","show":true,"title":[
                        {"righttit":"全部推荐"},
                        {"righttit":"上衣推荐"}
                    ]},
                {"tab":"上衣","show":false,"title":[
                        {"righttit":"shangyi"},
                        {"righttit":"jfaijk"}
                    ]},
                {"tab":"裤装","show":false,"title":"3333"},
                {"tab":"鞋靴","show":false,"title":"3333"},
                {"tab":"包类 / 装备","show":false,"title":"3333"},
                {"tab":"服配","show":false,"title":"3333"},
                {"tab":"有食","show":false,"title":"3333"},
                {"tab":"有玩","show":false,"title":"3333"},
                {"tab":"美妆 / 个护","show":false,"title":"3333"}
            ]},
        {title:"Lifestyle","rightshow":false,leftnav:[
                {"tab":"推荐","show":true,"title":[
                        {"righttit":"全部推荐"},
                        {"righttit":"上衣推荐"}
                    ]},
                {"tab":"上衣","show":false,"title":[
                        {"righttit":"shangyi"},
                        {"righttit":"jfaijk"}
                    ]},
                {"tab":"裤装","show":false,"title":"3333"},
                {"tab":"鞋靴","show":false,"title":"3333"},
                {"tab":"包类 / 装备","show":false,"title":"3333"},
                {"tab":"服配","show":false,"title":"3333"},
                {"tab":"有食","show":false,"title":"3333"},
                {"tab":"有玩","show":false,"title":"3333"},
                {"tab":"美妆 / 个护","show":false,"title":"3333"}
            ]}
    ];
    export default {
        name: "classify",
        components: {
            footbar
        },
        data() {
            return {
                list:obj,
                j:0
                // boys:true,
                // girls:false,
                // kids:false,
                // lifestyle:false,
                // boystj: true,

            }
        },
        methods: {
            tab:function(index){
                this.j=index
                for(var i=0;i<this.list.length;i++){
                    this.list[i].rightshow=false;
                    if(i==index){
                        this.list[index].rightshow=true;
                    }
                }
            },
            lanv:function(index){
                for(var i=0;i<this.list[j].leftnav.length;i++){
                    this.list[j].leftnav.rightshow=false;
                    if(i==index){
                        this.list[j].leftnav.rightshow=true;
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .classify {
        text-align: center;
        background-color: #f0f0f0;

        input {
            height: 0.35rem;
            border: none;
            border-radius: 0.2rem 0.2rem;
            width: 88%;
            background: url("../../static/classify/search.png") no-repeat 0.05rem 0.05rem;
            background-color: white;
            background-size: 0.25rem 0.25rem;
            margin: 0.1rem 0;
            padding-left: 0.3rem;
        }

        .nav {
            display: inline-block;
            justify-content: space-between;
            margin-bottom: 0.02rem;
            position: relative;
            width: 25%;

            a {
                display: block;
                width: 99%;
                background-color: white;
                color: black;
                height: 0.35rem;
                line-height: 0.35rem;
            }
            .bottom{
                position: absolute;
                width: 1.5rem;
                height: 4rem;
                background-color: aqua;
                left: 0;
                top:100%;
            }
        }

        /*router-view{*/
        /*    background-color: white;*/
        /*}*/
    }
</style>
