<template>
  <div class="goods">
    <!-- <goods-list-item v-for="item in goods" :key="item.id" :goodsItems="item" /> -->
    <GoodsListItem v-for="item in goods" :key="item.id  " :goodsItem="item" class="goodsItem"></GoodsListItem>
    <!-- <ul>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
      <li>GoodsList组件</li>
    </ul> -->
  </div>
</template>

<script>
// 导入goodListItem组件
import GoodsListItem from './GoodsListItem.vue'
export default {
  data() {
    return {}
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      },
    },
  },
  components: {
    GoodsListItem,
  },
}
</script>

<style scoped lang='less'>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

// .goodsItem {
//   // flex: 4%;
// }
</style>