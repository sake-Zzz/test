<template>
  <div class="warpper" ref="warp">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
    },
  },
  name: "Scroll",
  data() {
    return {
      scroll: "",
      message: "你好",
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.warp, {
      click: true,
      pullUpLoad: true,
      probeType: this.probeType,
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position)
      this.$emit("contentscroll", position);
    });
    this.scroll.on("pullingUp", () => {
      // console.log("上拉加载更多")
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    // this.scroll.finishPullUp();
    finish(){
      this.scroll.finishPullUp();
    },
    refresh(){
      this.scroll.refresh()
    }
  },
};
</script>

<style>
</style>