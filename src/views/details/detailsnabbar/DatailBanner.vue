<template>
  <div>
    <div class="swiper-container">
      <!-- {{imgs}} -->
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in topimg" :key="index">
          <img :src="item" alt="" 
          @load="imgover"/>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "DetailBanner",
  props: {
    topimg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  updated() {
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
  methods:{
    imgover(){
      this.$emit("detailimgover")
    }
  }
};
</script>

<style scoped>
.swiper-slide {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.swiper-slide img {
  width: 100%;
}
</style>