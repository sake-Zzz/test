<template>
  <div class="Recommend">
      <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
          <a :href="item.link" >
              <img :src="item.image" alt="" >
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    },

    name:"HomeRecommend",
  
    
}
</script>

<style scoped>
 .Recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
    background-color: #fff;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>