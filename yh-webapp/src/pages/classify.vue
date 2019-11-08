<template>
    <div class="classify">
        <input type="text" placeholder="搜索商品">
        <div class="nav">
            <a @click="dboys">Boys</a>
            <a @click="dgirls">Girls</a>
            <a @click="dkids">Kids</a>
            <a @click="dlifestyle">Lifestyle</a>
        </div>
           <div v-show="boys" class="boys alls">
               <ul class="all">
                   <li v-for="(item,index) in boyslist" @click="tab(index)" :class="{active:istrue==index}">
                       {{item.tab}}
                       <div class="box">
                           <ul v-show="item.show" class="bigbox">
                               <li v-for="(val,i) in item.title">{{val.righttit}}</li>
                           </ul>
                       </div>
                   </li>
               </ul>
           </div>
           <div v-show="girls" class="girls alls">
               <ul class="all">
                   <li v-for="(item,index) in girlslist" @click="tag(index)">
                       {{item.tab}}
                       <div class="box">
                           <ul v-show="item.show" class="bigbox">
                               <li v-for="(val,i) in item.title">{{val.righttit}}</li>
                           </ul>
                       </div>
                   </li>
               </ul>
           </div>
           <div v-show="kids" class="kids alls">
               <ul class="all">
                   <li v-for="(item,index) in kidslist" @click="tak(index)">
                       {{item.tab}}
                       <div class="box">
                           <ul v-show="item.show" class="bigbox">
                               <li v-for="(val,i) in item.title">{{val.righttit}}</li>
                           </ul>
                       </div>
                   </li>
               </ul>
           </div>
           <div v-show="lifestyle" class="lifestyle alls">
               <ul class="all">
                   <li v-for="(item,index) in lifestylelist" @click="tal(index)">
                       {{item.tab}}
                       <div class="box">
                           <ul v-show="item.show" class="bigbox">
                               <li v-for="(val,i) in item.title">{{val.righttit}}</li>
                           </ul>
                       </div>
                   </li>
               </ul>
           </div>
        <footbar></footbar>
    </div>
</template>

<script>
    import footbar from "../components/footerbar/footbar";

    export default {
        name: "classify",
        components: {
            footbar
        },
        data() {
            return {
                istrue:0,
                boys: true,
                girls: false,
                kids: false,
                lifestyle: false,
                boyslist: [
                    {
                        "tab": "推荐", "show": true, "title": [
                            {"righttit": "全部推荐"},
                            {"righttit": "卫衣"},
                            {"righttit": "衬衫"},
                            {"righttit": "夹克"},
                            {"righttit": "运动鞋"},
                            {"righttit": "棒球帽"},
                            {"righttit": "手表"},
                            {"righttit": "运动裤"},
                            {"righttit": "休闲裤"},
                            {"righttit": "牛仔裤"},
                            {"righttit": "首饰"},
                            {"righttit": "休闲鞋"},
                            {"righttit": "袜子"},
                            {"righttit": "双肩包"},
                            {"righttit": "单肩包/手拎包"},
                            {"righttit": "腰包/胸包/臂包"},
                            {"righttit": "背心"},
                            {"righttit": "太阳镜"}
                        ]
                    },
                    {
                        "tab": "上衣", "show": false, "title": [
                            {"righttit": "全部上衣"},
                            {"righttit": "卫衣"},
                            {"righttit": "夹克"},
                            {"righttit": "棉衣"},
                            {"righttit": "羽绒服"},
                            {"righttit": "大衣"},
                            {"righttit": "毛衣/针织"},
                            {"righttit": "T恤"},
                            {"righttit": "风衣"},
                            {"righttit": "衬衫"},
                            {"righttit": "防风外套"},
                            {"righttit": "POLO"},
                            {"righttit": "西装"},
                            {"righttit": "套装"},
                            {"righttit": "马甲"},
                            {"righttit": "背心"}
                        ]
                    },
                    {
                        "tab": "裤装", "show": false, "title": [
                            {"righttit": "全部裤装"},
                            {"righttit": "休闲裤"},
                            {"righttit": "牛仔裤"},
                            {"righttit": "运动裤"},
                            {"righttit": "紧身裤/打底裤"},
                            {"righttit": "西裤"},
                            {"righttit": "连体裤"},
                            {"righttit": "内裤"},
                            {"righttit": "短裤"}
                        ]
                    },
                    {
                        "tab": "鞋靴", "show": false, "title": [
                            {"righttit": "全部鞋靴"},
                            {"righttit": "运动鞋"},
                            {"righttit": "鞋子"},
                            {"righttit": "时装鞋"},
                            {"righttit": "家居鞋"},
                            {"righttit": "拖鞋"},
                            {"righttit": "雪地靴"},
                            {"righttit": "凉鞋"},
                            {"righttit": "保养护理"}
                        ]
                    },
                    {
                        "tab": "包类 / 装备", "show": false, "title": [
                            {"righttit": "全部包类 / 装备"},
                            {"righttit": "双肩包"},
                            {"righttit": "单肩包/手拎包"},
                            {"righttit": "腰包/胸包/臂包"},
                            {"righttit": "邮差包"},
                            {"righttit": "钱包/卡包"},
                            {"righttit": "旅行箱"},
                            {"righttit": "旅行包"},
                            {"righttit": "tote包"},
                            {"righttit": "储物包"},
                            {"righttit": "环保包"},
                            {"righttit": "滑板"}
                        ]
                    },
                    {
                        "tab": "服配", "show": false, "title": [
                            {"righttit": "全部服配"},
                            {"righttit": "帽子"},
                            {"righttit": "棒球帽"},
                            {"righttit": "袜子"},
                            {"righttit": "首饰"},
                            {"righttit": "腰带"},
                            {"righttit": "配饰"},
                            {"righttit": "手表"},
                            {"righttit": "眼镜/镜框"},
                            {"righttit": "太阳镜"},
                            {"righttit": "太阳镜"},
                            {"righttit": "内衣/家居服"},
                            {"righttit": "围巾/丝巾/披肩"}
                        ]
                    },
                    {
                        "tab": "创意生活", "show": false, "title": [
                            {"righttit": "全部创意生活"},
                            {"righttit": "手机配件"},
                            {"righttit": "影音娱乐"},
                            {"righttit": "音响/音箱"},
                            {"righttit": "火机烟俱"},
                            {"righttit": "移动电源"},
                            {"righttit": "家具电器"},
                            {"righttit": "水具酒具"},
                            {"righttit": "雨伞雨具"},
                            {"righttit": "生活用品"},
                            {"righttit": "厨具餐具"},
                            {"righttit": "文具"},
                            {"righttit": "家装软饰"},
                            {"righttit": "电脑配件"},
                            {"righttit": "永生花"},
                            {"righttit": "图书杂志"}
                        ]
                    },
                    {
                        "tab": "有食", "show": false, "title": [
                            {"righttit": "全部有食"},
                            {"righttit": "肉干小食"},
                            {"righttit": "冲饮谷物"},
                            {"righttit": "饼干糕点"},
                            {"righttit": "蜜饯果干"},
                            {"righttit": "膨化食品"},
                            {"righttit": "坚果"},
                            {"righttit": "咖啡"},
                            {"righttit": "酒水饮料"},
                            {"righttit": "糖果/巧克力"},
                            {"righttit": "方便速食"},
                            {"righttit": "调味品"}
                        ]
                    },
                    {
                        "tab": "有玩", "show": false, "title": [
                            {"righttit": "全部有玩"},
                            {"righttit": "玩具模型"},
                            {"righttit": "大电影/大IP"},
                            {"righttit": "汽车模型"},
                            {"righttit": "盲盒"},
                            {"righttit": "益智"},
                            {"righttit": "立体拼插"},
                            {"righttit": "桌面游戏"}
                        ]
                    },
                    {
                        "tab": "个人护理", "show": false, "title": [
                            {"righttit": "全面个人护理"},
                            {"righttit": "洁面"},
                            {"righttit": "面膜/眼膜"},
                            {"righttit": "乳液面霜"},
                            {"righttit": "套装"},
                            {"righttit": "香水"},
                            {"righttit": "口腔护理"},
                            {"righttit": "造型"},
                            {"righttit": "洗发"}
                        ]
                    }
                ],
                girlslist: [
                    {
                        "tab": "推荐", "show": true, "title": [
                            {"righttit": "全部推荐"},
                            {"righttit": "卫衣"},
                            {"righttit": "衬衫"},
                            {"righttit": "半身裙"},
                            {"righttit": "连衣裙"},
                            {"righttit": "夹克"},
                            {"righttit": "帽子"},
                            {"righttit": "运动裤"},
                            {"righttit": "休闲裤"},
                            {"righttit": "牛仔裤"},
                            {"righttit": "首饰"},
                            {"righttit": "休闲鞋"},
                            {"righttit": "袜子"},
                            {"righttit": "双肩包"},
                            {"righttit": "单肩包/手拎包"},
                            {"righttit": "腰包/胸包/臂包"},
                            {"righttit": "背心"},
                            {"righttit": "太阳镜"}
                        ]
                    },
                    {
                        "tab": "上衣", "show": false, "title": [
                            {"righttit": "全部上衣"},
                            {"righttit": "卫衣"},
                            {"righttit": "夹克"},
                            {"righttit": "棉衣"},
                            {"righttit": "羽绒服"},
                            {"righttit": "大衣"},
                            {"righttit": "毛衣/针织"},
                            {"righttit": "T恤"},
                            {"righttit": "风衣"},
                            {"righttit": "衬衫"},
                            {"righttit": "防风外套"},
                            {"righttit": "POLO"},
                            {"righttit": "西装"},
                            {"righttit": "套装"},
                            {"righttit": "马甲"},
                            {"righttit": "背心"}
                        ]
                    },
                    {
                        "tab": "裤装", "show": false, "title": [
                            {"righttit": "全部裤装"},
                            {"righttit": "休闲裤"},
                            {"righttit": "牛仔裤"},
                            {"righttit": "运动裤"},
                            {"righttit": "紧身裤/打底裤"},
                            {"righttit": "西裤"},
                            {"righttit": "连体裤"},
                            {"righttit": "内裤"},
                            {"righttit": "短裤"}
                        ]
                    },
                    {
                        "tab": "裙装", "show": false, "title": [
                            {"righttit": "全部裙装"},
                            {"righttit": "连衣裙"},
                            {"righttit": "半身裙"}
                        ]
                    },
                    {
                        "tab": "包类 / 装备", "show": false, "title": [
                            {"righttit": "全部包类 / 装备"},
                            {"righttit": "双肩包"},
                            {"righttit": "单肩包/手拎包"},
                            {"righttit": "腰包/胸包/臂包"},
                            {"righttit": "邮差包"},
                            {"righttit": "钱包/卡包"},
                            {"righttit": "旅行箱"},
                            {"righttit": "旅行包"},
                            {"righttit": "tote包"},
                            {"righttit": "储物包"},
                            {"righttit": "环保包"},
                            {"righttit": "滑板"}
                        ]
                    },
                    {
                        "tab": "服配", "show": false, "title": [
                            {"righttit": "全部服配"},
                            {"righttit": "帽子"},
                            {"righttit": "棒球帽"},
                            {"righttit": "袜子"},
                            {"righttit": "首饰"},
                            {"righttit": "腰带"},
                            {"righttit": "配饰"},
                            {"righttit": "手表"},
                            {"righttit": "眼镜/镜框"},
                            {"righttit": "太阳镜"},
                            {"righttit": "太阳镜"},
                            {"righttit": "内衣/家居服"},
                            {"righttit": "围巾/丝巾/披肩"}
                        ]
                    },
                    {
                        "tab": "创意生活", "show": false, "title": [
                            {"righttit": "全部创意生活"},
                            {"righttit": "手机配件"},
                            {"righttit": "影音娱乐"},
                            {"righttit": "音响/音箱"},
                            {"righttit": "火机烟俱"},
                            {"righttit": "移动电源"},
                            {"righttit": "家具电器"},
                            {"righttit": "水具酒具"},
                            {"righttit": "雨伞雨具"},
                            {"righttit": "生活用品"},
                            {"righttit": "厨具餐具"},
                            {"righttit": "文具"},
                            {"righttit": "家装软饰"},
                            {"righttit": "电脑配件"},
                            {"righttit": "永生花"},
                            {"righttit": "图书杂志"}
                        ]
                    },
                    {
                        "tab": "有食", "show": false, "title": [
                            {"righttit": "全部有食"},
                            {"righttit": "肉干小食"},
                            {"righttit": "冲饮谷物"},
                            {"righttit": "饼干糕点"},
                            {"righttit": "蜜饯果干"},
                            {"righttit": "膨化食品"},
                            {"righttit": "坚果"},
                            {"righttit": "咖啡"},
                            {"righttit": "酒水饮料"},
                            {"righttit": "糖果/巧克力"},
                            {"righttit": "方便速食"},
                            {"righttit": "调味品"}
                        ]
                    },
                    {
                        "tab": "有玩", "show": false, "title": [
                            {"righttit": "全部有玩"},
                            {"righttit": "玩具模型"},
                            {"righttit": "大电影/大IP"},
                            {"righttit": "汽车模型"},
                            {"righttit": "盲盒"},
                            {"righttit": "益智"},
                            {"righttit": "立体拼插"},
                            {"righttit": "桌面游戏"}
                        ]
                    },
                    {
                        "tab": "个人护理", "show": false, "title": [
                            {"righttit": "全面个人护理"},
                            {"righttit": "洁面"},
                            {"righttit": "面膜/眼膜"},
                            {"righttit": "乳液面霜"},
                            {"righttit": "套装"},
                            {"righttit": "香水"},
                            {"righttit": "口腔护理"},
                            {"righttit": "造型"},
                            {"righttit": "洗发"}
                        ]
                    }
                ],
                kidslist: [
                    {
                        "tab": "上衣", "show": true, "title": [
                            {"righttit": "全部上衣"},
                            {"righttit": "卫衣"},
                            {"righttit": "夹克"},
                            {"righttit": "棉衣"},
                            {"righttit": "羽绒服"},
                            {"righttit": "大衣"},
                            {"righttit": "毛衣/针织"},
                            {"righttit": "T恤"},
                            {"righttit": "风衣"},
                            {"righttit": "衬衫"},
                            {"righttit": "防风外套"},
                            {"righttit": "POLO"},
                            {"righttit": "西装"},
                            {"righttit": "套装"},
                            {"righttit": "马甲"},
                            {"righttit": "背心"}
                        ]
                    },
                    {
                        "tab": "裤装", "show": false, "title": [
                            {"righttit": "全部裤装"},
                            {"righttit": "休闲裤"},
                            {"righttit": "牛仔裤"},
                            {"righttit": "运动裤"},
                            {"righttit": "紧身裤/打底裤"},
                            {"righttit": "西裤"},
                            {"righttit": "连体裤"},
                            {"righttit": "内裤"},
                            {"righttit": "短裤"}
                        ]
                    },
                    {
                        "tab": "鞋靴", "show": false, "title": [
                            {"righttit": "全部鞋靴"},
                            {"righttit": "运动鞋"},
                            {"righttit": "鞋子"},
                            {"righttit": "时装鞋"},
                            {"righttit": "家居鞋"},
                            {"righttit": "拖鞋"},
                            {"righttit": "雪地靴"},
                            {"righttit": "凉鞋"},
                            {"righttit": "保养护理"}
                        ]
                    },
                    {
                        "tab": "包类 / 装备", "show": false, "title": [
                            {"righttit": "全部包类 / 装备"},
                            {"righttit": "双肩包"},
                            {"righttit": "单肩包/手拎包"},
                            {"righttit": "腰包/胸包/臂包"},
                            {"righttit": "邮差包"},
                            {"righttit": "钱包/卡包"},
                            {"righttit": "旅行箱"},
                            {"righttit": "旅行包"},
                            {"righttit": "tote包"},
                            {"righttit": "储物包"},
                            {"righttit": "环保包"},
                            {"righttit": "滑板"}
                        ]
                    },
                    {
                        "tab": "服配", "show": false, "title": [
                            {"righttit": "全部服配"},
                            {"righttit": "帽子"},
                            {"righttit": "棒球帽"},
                            {"righttit": "袜子"},
                            {"righttit": "首饰"},
                            {"righttit": "腰带"},
                            {"righttit": "配饰"},
                            {"righttit": "手表"},
                            {"righttit": "眼镜/镜框"},
                            {"righttit": "太阳镜"},
                            {"righttit": "太阳镜"},
                            {"righttit": "内衣/家居服"},
                            {"righttit": "围巾/丝巾/披肩"}
                        ]
                    },
                    {
                        "tab": "创意生活", "show": false, "title": [
                            {"righttit": "全部创意生活"},
                            {"righttit": "手机配件"},
                            {"righttit": "影音娱乐"},
                            {"righttit": "音响/音箱"},
                            {"righttit": "火机烟俱"},
                            {"righttit": "移动电源"},
                            {"righttit": "家具电器"},
                            {"righttit": "水具酒具"},
                            {"righttit": "雨伞雨具"},
                            {"righttit": "生活用品"},
                            {"righttit": "厨具餐具"},
                            {"righttit": "文具"},
                            {"righttit": "家装软饰"},
                            {"righttit": "电脑配件"},
                            {"righttit": "永生花"},
                            {"righttit": "图书杂志"}
                        ]
                    },
                    {
                        "tab": "有食", "show": false, "title": [
                            {"righttit": "全部有食"},
                            {"righttit": "肉干小食"},
                            {"righttit": "冲饮谷物"},
                            {"righttit": "饼干糕点"},
                            {"righttit": "蜜饯果干"},
                            {"righttit": "膨化食品"},
                            {"righttit": "坚果"},
                            {"righttit": "咖啡"},
                            {"righttit": "酒水饮料"},
                            {"righttit": "糖果/巧克力"},
                            {"righttit": "方便速食"},
                            {"righttit": "调味品"}
                        ]
                    },
                    {
                        "tab": "有玩", "show": false, "title": [
                            {"righttit": "全部有玩"},
                            {"righttit": "玩具模型"},
                            {"righttit": "大电影/大IP"},
                            {"righttit": "汽车模型"},
                            {"righttit": "盲盒"},
                            {"righttit": "益智"},
                            {"righttit": "立体拼插"},
                            {"righttit": "桌面游戏"}
                        ]
                    }
                ],
                lifestylelist: [
                    {
                        "tab": "创意生活", "show": true, "title": [
                            {"righttit": "全部创意生活"},
                            {"righttit": "手机配件"},
                            {"righttit": "影音娱乐"},
                            {"righttit": "音响/音箱"},
                            {"righttit": "火机烟俱"},
                            {"righttit": "移动电源"},
                            {"righttit": "家具电器"},
                            {"righttit": "水具酒具"},
                            {"righttit": "雨伞雨具"},
                            {"righttit": "生活用品"},
                            {"righttit": "厨具餐具"},
                            {"righttit": "文具"},
                            {"righttit": "家装软饰"},
                            {"righttit": "电脑配件"},
                            {"righttit": "永生花"},
                            {"righttit": "图书杂志"}
                        ]
                    },
                    {
                        "tab": "有食", "show": false, "title": [
                            {"righttit": "全部有食"},
                            {"righttit": "肉干小食"},
                            {"righttit": "冲饮谷物"},
                            {"righttit": "饼干糕点"},
                            {"righttit": "蜜饯果干"},
                            {"righttit": "膨化食品"},
                            {"righttit": "坚果"},
                            {"righttit": "咖啡"},
                            {"righttit": "酒水饮料"},
                            {"righttit": "糖果/巧克力"},
                            {"righttit": "方便速食"},
                            {"righttit": "调味品"}
                        ]
                    },
                    {
                        "tab": "有玩", "show": false, "title": [
                            {"righttit": "全部有玩"},
                            {"righttit": "玩具模型"},
                            {"righttit": "大电影/大IP"},
                            {"righttit": "汽车模型"},
                            {"righttit": "盲盒"},
                            {"righttit": "益智"},
                            {"righttit": "立体拼插"},
                            {"righttit": "桌面游戏"}
                        ]
                    },
                    {
                        "tab": "个人护理", "show": false, "title": [
                            {"righttit": "全面个人护理"},
                            {"righttit": "洁面"},
                            {"righttit": "面膜/眼膜"},
                            {"righttit": "乳液面霜"},
                            {"righttit": "套装"},
                            {"righttit": "香水"},
                            {"righttit": "口腔护理"},
                            {"righttit": "造型"},
                            {"righttit": "洗发"}
                        ]
                    }
                ]
            }
        },
        methods: {
            dboys() {
                this.boys = true,
                    this.girls = false,
                    this.kids = false,
                    this.lifestyle = false
            },
            dgirls() {
                this.boys = false,
                    this.girls = true,
                    this.kids = false,
                    this.lifestyle = false
            },
            dkids() {
                this.boys = false,
                    this.girls = false,
                    this.kids = true,
                    this.lifestyle = false
            },
            dlifestyle() {
                this.boys = false,
                    this.girls = false,
                    this.kids = false,
                    this.lifestyle = true
            },
            tab: function (index) {
                this.istrue=index;
                for (var i = 0; i < this.boyslist.length; i++) {
                    this.boyslist[i].show = false;
                    if (i == index) {
                        this.boyslist[index].show = true;
                    }
                }
            },
            tag: function (index) {
                this.istrue=index;
                for (var i = 0; i < this.girlslist.length; i++) {
                    this.girlslist[i].show = false;
                    if (i == index) {
                        this.girlslist[index].show = true;
                    }
                }
            },
            tak: function (index) {
                this.istrue=index;
                for (var i = 0; i < this.kidslist.length; i++) {
                    this.kidslist[i].show = false;
                    if (i == index) {
                        this.kidslist[index].show = true;
                    }
                }
            },
            tal: function (index) {
                this.istrue=index;
                for (var i = 0; i < this.lifestylelist.length; i++) {
                    this.lifestylelist[i].show = false;
                    if (i == index) {
                        this.lifestylelist[index].show = true;
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
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.02rem;

            a {
                width: 24.8%;
                background-color: white;
                color: black;
                height: 0.35rem;
                line-height: 0.35rem;
            }
        }

        .alls {
            .all {
                position: relative;
                background-color: #f0f0f0;
                width: 40%;
                text-align: left;
                li {
                    display: block;
                    color: black;
                    width: 80%;
                    padding-left: 20%;
                    height: 0.5rem;
                    line-height: 0.5rem;
                    border-bottom: #f0f0f0 0.015rem solid;
                }
            }

            .box {
                background-color: #f0f0f0;
                position: absolute;
                left: 100%;
                top: 0px;
                width: 150%;
            }
        }
        .bigbox{
            padding-bottom: 0.55rem;
            li{
                /*margin-bottom: 0.01rem;*/
                background-color: white;
                /*border-bottom: #f0f0f0 0.01rem solid;*/
            }
        }
        /*router-view{*/
        /*    background-color: white;*/
        /*}*/
    }
    .active{
        background-color: white;
    }
</style>
