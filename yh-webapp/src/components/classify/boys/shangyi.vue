<template>
    <div class="classify">
        <input type="text" placeholder="搜索商品">
        <div class="nav">
            <a>Boys</a>
            <a>Girls</a>
            <a>Kids</a>
            <a>Lifestyle</a>
        </div>
        <div v-show="boys" @click="dboys" class="boys alls">
            <ul class="leftnav">
                <li @click="btj">推荐</li>
                <li>上衣</li>
                <li>裤装</li>
                <li>鞋靴</li>
                <li>包类/装备</li>
                <li>服配</li>
                <li>有食</li>
                <li>有玩</li>
                <li>美妆/个护</li>
            </ul>
            <ul v-show="boystj" class="rightnav">
                <li>推荐</li>
                <li>上衣</li>
                <li>裤装</li>
                <li>鞋靴</li>
                <li>包类/装备</li>
                <li>服配</li>
                <li>有食</li>
                <li>有玩</li>
                <li>美妆/个护</li>
            </ul>
            <ul v-show="boystj" class="rightnav">
                <li>推荐</li>
                <li>上衣</li>
                <li>裤装</li>
                <li>鞋靴</li>
                <li>包类/装备</li>
                <li>服配</li>
                <li>有食</li>
                <li>有玩</li>
                <li>美妆/个护</li>
            </ul>
            <ul v-show="boystj" class="rightnav">
                <li>推荐</li>
                <li>上衣</li>
                <li>裤装</li>
                <li>鞋靴</li>
                <li>包类/装备</li>
                <li>服配</li>
                <li>有食</li>
                <li>有玩</li>
                <li>美妆/个护</li>
            </ul>
            <ul v-show="boystj" class="rightnav">
                <li>推荐</li>
                <li>上衣</li>
                <li>裤装</li>
                <li>鞋靴</li>
                <li>包类/装备</li>
                <li>服配</li>
                <li>有食</li>
                <li>有玩</li>
                <li>美妆/个护</li>
            </ul>
        </div>
        <div v-show="girls" @click="dgirls" class="girls alls">

        </div>
        <div v-show="kids" @click="dkids" class="kids alls">

        </div>
        <div v-show="lifestyle" @click="dlifestyle" class="lifestyle alls">

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
        data(){
            return {
                boys:true,
                girls:false,
                kids:false,
                lifestyle:false,
                boystj: true,

            }
        },
        methods:{
            dboys(){

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

        /*router-view{*/
        /*    background-color: white;*/
        /*}*/
    }
</style>
