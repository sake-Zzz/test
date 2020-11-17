<template>
  <div class="GoodsList">
      <!-- {{goodsList}} -->
      <GoodsListItem v-for="(item,index) in goodsList" :key="index" :GoodsListItem ="item"  />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem"
export default {
    name:"GoodsList",
    props:{
        goodsList:{
            type:Array,
            default(){
                return []
            },

        }
    },
    data(){
        return{
            scroll:null
        }
    },
    components:{
        GoodsListItem
    },
}
</script>

<style scoped>
    .GoodsList{
        display: flex;
        justify-content: space-around;
        padding: 0 5px;
        flex-wrap: wrap;
    }
</style>