<template>
    <div class="Crtgory">
      <CartTop />
      <div class="center">
      <Cartleft :cartallgoods = "cartallgoods" @cartclick="cartclick" class="left"/>
      <Cartright :cartGoods = "cartGoods" class="right" />
      </div>
    </div>
</template>

<script>
import CartTop from "./cartwapper/CartTop"
import Cartleft from "./cartwapper/Cartleft"
import Cartright from "./cartwapper/Cartright"
import {getcartgories,getSubcategory} from "network/cartgory"
export default {
  name:"Crtgory",
  components:{
    CartTop,Cartleft,Cartright
  },
  data(){
    return{
      cartallgoods:[],
      cartGoods:[]
    }
  },
  created(){
    getcartgories().then(res=>{
      this.cartallgoods=res.data.category.list
      // console.log(this.cartallgoods)
    })
    getSubcategory(3627).then(res=>{
      this.cartGoods=(res.data.list)
      console.log(this.cartGoods)
    })
  },
  methods:{
    cartclick(idx){
      getSubcategory(idx).then(res=>this.cartGoods=(res.data.list))
    }
  }
}
</script>

<style scoped>
.center{
  display: flex;
}
.right {
  flex: 1;
}
</style>