<template>
  <div class="cartright">
    <ul class="goodslist">
      <li v-for="(item,index) in cartGoods" :key = "index">
       <p>
         <img :src="item.image" alt="">
         </p> 
       <p>
         {{item.title}}
         </p> 
        
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    cartGoods:{

    }
  },
    name:"Cartright",
}
</script>

<style scoped>
.goodslist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}
  .goodslist li {
    width: 24%;
    height: 60px;
    /* line-height: 60px; */
    margin-bottom: 30px;
    text-align: center;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .goodslist li img{
    width: 30px;
    height: 30px;
  }
</style>