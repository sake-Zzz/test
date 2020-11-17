<template>
  <div class="details">
    <DetailsNavBar class="DetailTop" @top="fn" />
    <BScroll class="DetailBscroll" @contentscroll="contentscroll" ref="Bscroll">
      <DetailBanner :topimg="topImage" @detailimgover="finish" />
      <DetailGoodsInfo :goods="goods" />
      <Merchant :shop="merchantinfo" />
      <Userinfo :userinfo="userinfo" />
      <DetailImageinfo :detailInfo="detailInfo" @imgclick="imgclicks" />
    </BScroll>
    <ScrollTop v-show="isshow" @click.native="back" />
    <DetailTabbar @cartClick="cartClick" />
  </div>
</template>

<script>
import BScroll from "components/common/scroll/Scroll";

import DetailsNavBar from "./detailsnabbar/DetailsNavBar";
import { GetDetals, GoodsInfo, Shop } from "../../network/details";

import DetailBanner from "./detailsnabbar/DatailBanner";
import DetailGoodsInfo from "./detailsnabbar/DetailGoodsInfo";
import Merchant from "./detailsnabbar/Merchant";
import DetailImageinfo from "./detailsnabbar/DetailImageinfo";
import Userinfo from "./detailsnabbar/Userinfo";
import ScrollTop from "components/content/scrolltop/ScrollTop";
import DetailTabbar from "./detailsnabbar/DetailTabbar"
export default {
  name: "Details",
  components: {
    DetailsNavBar,
    DetailBanner,
    DetailGoodsInfo,
    BScroll,
    Merchant,
    DetailImageinfo,
    Userinfo,
    ScrollTop,
    DetailTabbar
  },
  data() {
    return {
      id: null,
      topImage: [],
      goods: {},
      merchantinfo: {},
      detailInfo: {},
      userinfo: {},
        isshow:false,
      counts:0,
      
    };
  },
  created() {
    this.id = this.$route.query.id;
    GetDetals(this.id).then((res) => {
      // console.log(this.id);
      this.topImage = res.result.itemInfo.topImages;
      this.goods = new GoodsInfo(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      this.merchantinfo = new Shop(res.result.shopInfo);
      // 4.保存商品的详情数据
      this.detailInfo = res.result.detailInfo;
      this.userinfo = res.result.rate.list[0];
    });
  },
  methods: {
    back() {
      this.$refs.Bscroll.scrollTo(0, 0, 500);
    },
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
    finish() {
      this.$refs.Bscroll.refresh();
    },
    imgclicks() {
      this.$refs.Bscroll.refresh();
    },
    fn(index) {
      if (index == 0) {
        this.$refs.Bscroll.scrollTo(0, 0, 500);
      } else if (index == 1) {
        this.$refs.Bscroll.scrollTo(0, -735, 500);
      } else if (index == 2) {
        this.$refs.Bscroll.scrollTo(0, -1200, 500);
      } else {
        this.$refs.Bscroll.scrollTo(0, -2000, 500);
      }
    },
    cartClick(){
      const Obj = {}
      Obj.id =this.id
       Obj.imgURL = this.topImage[0]
       Obj.title = this.goods.title
       Obj.desc = this.goods.desc
        Obj.price = this.goods.realPrice
        Obj.count = 1
      
      this.$store.commit("addcart",Obj)
      // console.log(Obj)
    }
  },
};
</script>

<style scoped>
.details {
  height: 100vh;
  position: relative;
  z-index: 19;
  background-color: #fff;
  position: relative;
}
.DetailBscroll {
  position: absolute;
  /* height: 300px; */
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  height: auto;
  overflow: hidden;
}
</style>