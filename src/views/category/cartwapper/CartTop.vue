<template>
  <div class="cartleft">
    <Navbar class="fl">
      <div slot="center" >商品分类</div>
    </Navbar>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/NavBar"
export default {
    name:"Cartleft",
    components:{
      Navbar
    }
}
</script>

<style scoped>
.fl{
  /* color: #000; */
  background-color: var(--color-tint);
}

</style>