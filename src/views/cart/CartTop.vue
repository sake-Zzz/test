<template>
  <div class="bottoms">
    <van-card
      v-for="(item, index) in Cartinfo"
      :key="index"
      :num="item.count"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="item.imgURL"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { Card } from "vant";
Vue.use(Card);
export default {
  props: {
    Cartinfo: {},

  },
 
};
</script>

<style scoped>
</style>