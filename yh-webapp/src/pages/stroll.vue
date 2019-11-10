<template>
  <div class="stroll">
    <ul>
      <li v-for="(item,index) in header" @click="tab(index)" :class="{active:istrue==index}">{{item.title}}</li>
    </ul>
    <newest :data="newest" v-show="header[0].show"></newest>
    <collocation :data="newest" v-show="header[1].show"></collocation>
    <headlines v-show="header[2].show"></headlines>
    <uptodate v-show="header[3].show"></uptodate>
    <videos v-show="header[4].show"></videos>
    <footbar></footbar>
  </div>
</template>

<script>
  import footbar from "../components/footerbar/footbar";
  import newest from "../components/stroll/newest";
  import collocation from "../components/stroll/collocation";
  import uptodate from "../components/stroll/uptodate";
  import videos from "../components/stroll/videos";
  import headlines from "../components/stroll/headlines";

  export default {
    name: "stroll",
    components: {
      footbar,
      newest,
      collocation,
      uptodate,
      videos,
      headlines
    },
    data() {
      return {
        istrue: 0,
        header: [
          {title: "最新", show: true},
          {title: "搭配", show: false},
          {title: "头条", show: false},
          {title: "上新", show: false},
          {title: "视频", show: false}
        ],
        newest: [
          {banner: [
              {bannerimg: require("../../static/stroll/banner.jpg")},
              {bannerimg: require("../../static/stroll/banner.jpg")},
              {bannerimg: require("../../static/stroll/banner.jpg")},
              {bannerimg: require("../../static/stroll/banner.jpg")},
              {bannerimg: require("../../static/stroll/banner.jpg")}
            ]},
              {toppro: [
                  {
                    src: require("../../static/stroll/top1.jpg"),
                    title: "第一层",
                    name: "一name",
                    lnum: 58178,
                    dnum: 68,
                    botpro: [
                      {img: require("../../static/stroll/p1.jpg"), title: "COMMON", price: "￥1490.00"},
                      {img: require("../../static/stroll/p2.jpg"), title: "COMMON", price: "￥1490.00"},
                      {img: require("../../static/stroll/p3.jpg"), title: "COMMON", price: "￥1490.00"},
                      {img: require("../../static/stroll/p4.jpg"), title: "COMMON", price: "￥1490.00"}
                    ]
                  },
                  {
                    src: require("../../static/stroll/top2.jpg"),
                    title: "第二层",
                    name: "二name",
                    lnum: 58178,
                    dnum: 68,
                    botpro: [
                      {img: require("../../static/stroll/p5.jpg"), title: "COMMON", price: "￥1490.00"},
                      {img: require("../../static/stroll/p6.jpg"), title: "COMMON", price: "￥1490.00"},
                      {img: require("../../static/stroll/p7.jpg"), title: "COMMON", price: "￥1490.00"},
                      {img: require("../../static/stroll/p8.jpg"), title: "COMMON", price: "￥1490.00"}
                    ]
                  },
                  {
                    src: require("../../static/stroll/top3.jpg"),
                    title: "第三层",
                    name: "三name",
                    lnum: 58178,
                    dnum: 68,
                    botpro: [
                      {img: require("../../static/stroll/p9.jpg"),title: "COMMON", price: "￥1490.00"},
                      {img: require("../../static/stroll/p10.jpg"), title: "COMMON", price: "￥1490.00"},
                      {img: require("../../static/stroll/p11.jpg"), title: "COMMON", price: "￥1490.00"},
                      {img: require("../../static/stroll/p12.jpg"), title: "COMMON", price: "￥1490.00"}
                    ]
                  }
                ]}
        ]
      }
    },
    methods: {
      tab: function (index) {
        this.istrue = index;
        for (var i = 0; i < this.header.length; i++) {
          this.header[i].show = false;
          if (i == index) {
            this.header[index].show = true;
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .stroll {
    width: 100%;

    ul {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      border-bottom: lightgray 0.02rem solid;
      justify-content: space-around;

      li {
        display: inline-block;
        width: 15%;
        text-align: center;
        line-height: 0.43rem;
        font-size: 0.14rem;
        color: #686868;
      }

      .active {
        color: black;
        border-bottom: black 0.02rem solid;
        font-weight: 600;
      }
    }
  }
</style>
