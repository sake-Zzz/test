<template>
  <div>
    <CartTop :Cartinfo="Cartinfo" />
    <div class="bottoms">
      <Cartbottombar :money="$store.getters.moneys" />
    </div>
  </div>
</template>

<script>
import CartTop from "./CartTop";
import Cartbottombar from "./Cartbottombar";

export default {
  name: "Cart",
  data() {
    return {
      Cartinfo: {},
      money:0.00
    };
  },
  components: {
    CartTop,
    Cartbottombar,
  },
  created() {
    this.Cartinfo = this.$store.state.cartinfo;
    // console.log(this.$store.state.cartinfo);
      //  this.Cartinfo.forEach(item => {
      //           this.money += item .price *item.count
      //           console.log(this.money)
      //   });
  },

};
</script>

<style scoped>

</style>
