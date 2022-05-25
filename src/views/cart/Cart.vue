<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="navBar">
      <template #center>
        <div>
          购物车({{cartLength}})
        </div>
      </template>
    </nav-bar>

    <scroll class="content" ref="RefScroll" :probeType="3" :pullUpLoad="true">
      <!-- 商品列表cartList -->
      <cart-list></cart-list>
    </scroll>

    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import CartList from './childComponents/CartList.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import CartBottomBar from './childComponents/CartBottomBar.vue'

export default {
  computed: {
    cartLength() {
      return this.$store.getters.cartLength
    },
  },
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar,
  },
  mounted() {
    // this.$bus.$on('addCompelete', () => {
    //   // 注意函数不要加()不然把函数的返回值传进去了
    //   console.log('刷新')
    //   this.$refs.RefScroll.refresh()
    // })
  },
}
</script>

<style scoped lang="less">
.navBar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
  z-index: 99;
  position: relative;
}

.cart {
  height: 100vh;
  position: relative;
}

.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 89px;
  overflow: hidden;
}
</style>