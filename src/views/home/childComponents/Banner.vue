<template>
  <div class="swiper-container">
    <!-- {{imgs}} -->
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
       <a :href="item.link"> <img :src="item.image" alt="" /> </a>
       </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

 
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  props: ["imges"],
  name: "Banner",
  data: function () {
    return {
      imgs: [],
    };
  },
  watch: {
    imges() {
      this.imgs = this.imges;
    },
  },
  updated(){
      new Swiper(".swiper-container", {
        loop: true, 
        
    
      });

  }
};
</script>



<style scoped>
@import url("~assets/css/swiper.css");
.swiper-container {
  width: 100%;
  height: 195px;
}
.swiper-container img {
  width: 100%;
  height: 195px;
}
</style>