<template>
  <div id="App">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabbar/MainTabBar"
export default {
  name:"App",
  components:{
    MainTabBar
  }
}
</script>

<style scoped>
  @import url("assets/css/base.css");
  @import url("assets/css/swiper.css");
</style>