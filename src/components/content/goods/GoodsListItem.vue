<template>
  <div class="GoodsListItem " @click="getdelite">
    <img :src="GoodsListItem.show.img" alt="" @load="imgload">
    <div>
        <p class="title">{{GoodsListItem.title}}</p>
        <span class="price">{{GoodsListItem.price}}</span>
        <span class="collect">{{GoodsListItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name:"GoodsListItem",
    props:{
        GoodsListItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imgload(){
            this.$bus.$emit("itemimgload")
        },
        getdelite(){
            // console.log(this.GoodsListItem.iid)
            this.$router.push({path:"/details",query:{id:this.GoodsListItem.iid}})
        }
    }
}
</script>

<style scoped>
.GoodsListItem{
    width: 48%;
}
    .GoodsListItem img{
        width: 100%;
    }
    .title{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        padding: 0 10px;
    }
    .price{
        margin: 0 10px;
    }
</style>