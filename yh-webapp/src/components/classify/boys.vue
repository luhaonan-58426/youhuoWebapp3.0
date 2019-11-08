<template>
    <div class="box">
       <div>
           <router-link to="">推荐</router-link>
           <router-link to="">上衣</router-link>
           <router-link to="">裤装</router-link>
           <router-link to="">鞋靴</router-link>
           <router-link to="">包类/装备</router-link>
           <router-link to="">服配</router-link>
           <router-link to="">有食</router-link>
           <router-link to="">有玩</router-link>
           <router-link to="">美妆/个护</router-link>
       </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "boys"
    }
</script>

<style scoped lang="scss">
.box{
/*background-color: white;*/
    display: flex;
    div{
        display: inline-block;
        text-align: left;
        width: 40%;
        a{
            display: block;
            color: black;
            padding-left: 0.2rem;
            height: 0.5rem;
            line-height: 0.5rem;
        }
    }
    router-view{
        width: 60%;
    }
}
</style>