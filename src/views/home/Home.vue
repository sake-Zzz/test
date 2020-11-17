<template>
  <div class="Homebox">
    <Navbar class="nav-bar">
      <div slot="center">购物街</div>
    </Navbar>
<Tabbarlist
        :title="['流行', '新款', '精选']"
        @tabbarclick="getgoods" 
        :class="istabbar?'showtabbar':'isnone'" 
      />
    <Bscroll class="warppers" 
    ref="scroll"
     :probe-type = 3 
     @contentscroll="contentscroll"
     @pullingUp="moreload"
      > 
      <Banner :imges="banner"></Banner>
      <Recommend :recommend="recommend" />
      <CenterList />
      <Tabbarlist
        :title="['流行', '新款', '精选']"
        @tabbarclick="getgoods"
        :class="istabbar?'isnone':''"
      />
      <GoodsList :goodsList="goods[count].list" />
    </Bscroll>
    <ScrollTop v-show="isshow" @click.native="back" />
  </div>
</template>

<script>
import Navbar from "components/common/navbar/NavBar";
import Tabbarlist from "components/content/tabbarlist/TabBarList";
import ScrollTop from "components/content/scrolltop/ScrollTop"
import GoodsList from "components/content/goods/GoodsList";
import Bscroll from "components/common/scroll/Scroll";
import Banner from "./childComponents/Banner";
import Recommend from "./childComponents/HomeRecommend";
import CenterList from "./childComponents/HomeCenterList";

import { getHomeMultidata, getHomegoods } from "../../network/home";
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
    ScrollTop,
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
      isshow:false,
      counts:0,
      istabbar:false
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

    // 监测图片加载
    this.$bus.$on("itemimgload",()=>{
      this.$refs.scroll.refresh()
    })
  },
  methods: {
    // 点击回到顶部
    back(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    // 判断滚动距离  
    contentscroll(posistion){
      if(posistion.y<-592){
        this.istabbar=true
      }
      else{
        this.istabbar=false
      }
      if(posistion.y>-1000){
        this.isshow=false
      }
      else{
        this.isshow=true
      }
    },
    //  加载更多 

    moreload(){
      this.getHomegoods(this.count) 
      this.$refs.scroll.finishPullUp()
    },

  // 判断那个页面显示
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

  // Banner图
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },

    getHomegoods(type) {
      const page = this.goods[type].page + 1;
      getHomegoods(type, page).then((res) => {
        // this.goods[type].list = this.goods[type].list.concat(res.data.list);
        this.goods[type].list.push(...res.data.list)
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
  /* position: sticky; */
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
  overflow: hidden;
}
.showtabbar{
  position: relative;
  z-index: 100;
  background-color: #fff;
}
.isnone{
  display: none;
}
</style>
