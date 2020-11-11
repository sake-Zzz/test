<template>
  <div class="warpper" ref="warp">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name:"Scroll",
  data(){
    return{
      scroll:null
    }
  },
  mounted(){
    console.log("渲染")
      this.scroll = new BScroll(this.$refs.warp,{
        click:true,
      })
  }
}
</script>

<style>

</style>