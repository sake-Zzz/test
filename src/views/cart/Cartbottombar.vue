<template>
  <div >
    <van-submit-bar class="bottombar" :price="money* 100" button-text="提交订单" />
  </div>
</template>

<script>
import Vue from "vue";
import { SubmitBar } from "vant";

Vue.use(SubmitBar);
export default {
  name: "Cartbottombar",
  props: {
    money: {
      type: Number,
    },
  },
  created(){
    console.log(this.$store.getters.moneys)
  }
};
</script>

<style scoped>
.bottombar {
  /* background: red; */
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>