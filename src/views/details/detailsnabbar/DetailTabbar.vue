<template>
  
  <div>
      <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="cart-o" text="购物车"  />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button
    type="danger"
    text="加入购物车"
    @click="onClickButton"
  />
</van-goods-action>
  </div>
</template>

<script>
// import { Toast } from 'vant';

export default {
  methods: {
    onClickButton() {
     this.$emit("cartClick")
    },
  },
};
</script>

<style>

</style>