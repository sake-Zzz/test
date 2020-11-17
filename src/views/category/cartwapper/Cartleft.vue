<template>
  <div class="cartleft">
    <ul class="leftnav">
      <li v-for="(item , index) in cartallgoods" :key = "index" @click="quest(index)" >
       <p :class="{active : index === count  }">
         {{item.title}}
         </p> 
      </li>
    </ul>
  </div>
</template>

<script>
export default {  
  props:{
    cartallgoods:{
      
    }
  },
  data(){
    return{
      count:0
    }
  },
    name:"Cartleft",
    methods:{
      quest(index){
        this.count = index
        this.$emit("cartclick",this.cartallgoods[index].maitKey)
      }
    }
    
}
</script>

<style scoped>
  .leftnav{
    width: 100px;
    /* background: red; */
    display: flex;
    flex-direction: column;
    height: 94vh;
    
  }
  .leftnav li {
    text-align: center;
    flex: 1;
  }
  .active { 
    color: red;
  }
</style>