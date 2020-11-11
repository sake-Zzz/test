<template>
  <div class="Tabbarlist">
    <div class="TabBaritem" v-for="(item, index) in title" :key="index" @click="timeclick(index)">
      <span :class="{active : index === count  }">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
    },
  },
  name: "TabBarList",
  data(){
      return{
          count:0
      }
  },
  methods:{
      timeclick(index){
          this.count =index
          this.$emit("tabbarclick",index)
      }
  }
};
</script>

<style scoped>
.Tabbarlist {
  display: flex;
}
.TabBaritem {
  flex: 1;
  text-align: center;
  line-height: 30px;
}
.TabBaritem span {
  padding: 5px;
}
.active {
  border-bottom: 3px solid var(--color-tint);
}
</style>