<template>
  <div class="scrolltop">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
    name:"ScrollTop",
}
</script>

<style scoped>
    .scrolltop{
        position: fixed;
        right: 5px;
        bottom: 50px;
    }
    .scrolltop img{
        width: 50px;
        height: 50px;
    }
</style>