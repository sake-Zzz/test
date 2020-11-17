<template>
  <div>
      <Navbar>
          <div slot="left" class="back" @click="back">
              <img src="~assets/img/common/back.svg" alt="">
          </div>
          <div slot="center" class="center">
              <p v-for="(item,index) in title " :key = "index" @click="pitchon(index) " :class="{active: count === index}"
               >
                  {{item}}
              </p>
          </div>
      </Navbar>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/NavBar"
export default {
name:"DetailsNavBar",
components:{
    Navbar
},
data(){
    return{
        title:["商品","参数","评论","推荐"],
        count:0
    }
},
methods:{
    pitchon(index){
        this.count=index
        this.$emit("top",index)
    },
    back(){
        this.$router.go(-1)
    },
}

}
</script>

<style scoped>
    .center{
        color: #000;
        display: flex;
    }
    .center p{
        flex: 1;
    }
    .active{
        color: var(--color-high-text);
    }
    .back{
        text-align: center;
        /* line-height: 49px; */
        margin-top: 12px;
    }
</style>