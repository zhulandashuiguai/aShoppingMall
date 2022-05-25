<template>
  <div class="cartList">
    <CartListItem v-for="item in cartList" :key="item.id" :goodsItem="item"></CartListItem>
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'
export default {
  data() {
    return {}
  },
  computed: {
    cartList() {
      return this.$store.state.cartList
    },
  },
  components: {
    CartListItem,
  },
}
</script>

<style scoped lang="less">
</style>