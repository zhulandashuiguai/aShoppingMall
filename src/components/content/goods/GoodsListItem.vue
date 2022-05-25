<template>
  <div class="goodsItem" @click="itemClick">
    <img v-lazy="showImg" alt="" />
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    showImg() {
      if (this.goodsItem.image) {
        return this.goodsItem.image
      } else {
        return this.goodsItem.show.img
      }
    },
  },
  methods: {
    // 发送事件
    // imageLoad() {
    //   this.$bus.$emit('itemImageLoad')
    // },
    itemClick() {
      // 跳转到详情页
      this.$router.push('/detail/' + this.goodsItem.iid)
    },
  },
}
</script>

<style scoped lang='less'>
.goodsItem {
  width: 48%;
  padding-bottom: 40px;
  position: relative;
  img {
    width: 100%;
    border-radius: 5px;
  }
  .goodsInfo {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .price {
      color: var(--color-high-text);
      margin-right: 20px;
    }
    .collect {
      position: relative;
    }
    .collect::before {
      content: '';
      position: absolute;
      left: -15px;
      top: -1px;
      width: 14px;
      height: 14px;
      background: url('@/assets/imgs/common/collect.svg') 0 0/14px 14px;
    }
  }
}
</style>