<template>
  <TabBar>
    <!-- <div id="tab-bar">
        <div>
          <img src="@/assets/imgs/tabbar/home.svg" alt="">
          <div>
            首页
          </div>
        </div>
        <div>
          <img src="@/assets/imgs/tabbar/home.svg" alt="">
          <div>分类</div>
        </div>
        <div>
          <img src="@/assets/imgs/tabbar/home.svg" alt="">
          <div>购物车</div>
        </div>
        <div>
          <img src="@/assets/imgs/tabbar/home.svg" alt="">
          <div>我的</div>
        </div>
      </div> -->
    <TabBarItem path="/home" activeColor="deepPink">
      <img slot="item-icon" src="@/assets/imgs/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="@/assets/imgs/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="deepPink">
      <img slot="item-icon" src="@/assets/imgs/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="@/assets/imgs/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="deepPink">
      <img slot="item-icon" src="@/assets/imgs/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="@/assets/imgs/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="deepPink">
      <img slot="item-icon" src="@/assets/imgs/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="@/assets/imgs/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar.vue'
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
export default {
  components: {
    TabBar,
    TabBarItem,
  },
}
</script>

<style>
</style>