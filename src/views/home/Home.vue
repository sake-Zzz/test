<template>
  <div class="Homebox">
    <Navbar class="nav-bar">
      <div slot="center">购物街</div>
    </Navbar>

    <Bscroll class="warppers">
      <Banner :imges="banner"></Banner>
      <Recommend :recommend="recommend" />
      <CenterList />
      <Tabbarlist
        class="tabarcon"
        :title="['流行', '新款', '精选']"
        @tabbarclick="getgoods"
      />
      <GoodsList :goodsList="goods[count].list" />
    </Bscroll>
   
  </div>
</template>

<script>
import Navbar from "components/common/navbar/NavBar";
import Tabbarlist from "components/content/tabbarlist/TabBarList";
import GoodsList from "components/content/goods/GoodsList";
import Bscroll from "components/common/scroll/Scroll";
import Banner from "./childComponents/Banner";
import Recommend from "./childComponents/HomeRecommend";
import CenterList from "./childComponents/HomeCenterList";

import { getHomeMultidata, getHomegoods } from "../../network/home";
// import BScroll from "better-scroll";
export default {
  name: "Home",
  components: {
    Navbar,
    Banner,
    Recommend,
    CenterList,
    Tabbarlist,
    GoodsList,
    Bscroll,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      count: "pop",
      // scroll: null,
      // m: 0,
    };
  },
  created() {
    // 发送所有请求
    this.getHomeMultidata();
    this.getHomegoods("pop");
    this.getHomegoods("new");
    this.getHomegoods("sell");
  },
  methods: {


    getgoods(index) {
      switch (index) {
        case 0:
          this.count = "pop";
          break;
        case 1:
          this.count = "new";
          break;
        case 2:
          this.count = "sell";
          break;
      }
    },

    // 网络请求


    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },

    getHomegoods(type) {
      const page = this.goods[type].page + 1;
      getHomegoods(type, page).then((res) => {
        this.goods[type].list = this.goods[type].list.concat(res.data.list);
        // console.log("1", res.data.list);
      });
      this.goods[type].page += 1;
    },
  },
};
</script>

<style scoped>
.Homebox {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.nav-bar {
  background-color: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
}
.tabarcon {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.warppers {
  position:absolute;
  top: 44px;
  height: auto;
  bottom:49px;
  left: 0;
  right: 0;
  /* overflow: hidden; */
}
</style>
