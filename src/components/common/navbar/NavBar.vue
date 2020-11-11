<template>
  <div class="Navbar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot class="right"></slot></div>
  </div>
</template>

<script>
export default {
    name:"Navbar"
}
</script>

<style scoped>
        .Navbar{
            display: flex;
            height: 44px;
            box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
        }
        .left ,.right {
            width: 60px;
        }
        .center{
            flex: 1;
            text-align: center;
            line-height: 44px;
            color: #fff;
        }
</style>