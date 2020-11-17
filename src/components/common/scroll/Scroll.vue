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
    console.log(this.scroll.scrollTop)
    this.scroll.on("scroll", (position) => {
      this.$emit("contentscroll", position);
    //  console.log(position)
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
    refresh(){
      this.scroll.refresh()
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    },
  },
};
</script>

<style>
</style>