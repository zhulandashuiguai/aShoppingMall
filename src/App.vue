<template>
  <div>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/mainTabBar/MainTabBar.vue'
export default {
  components: {
    MainTabBar,
  },
}
</script>

<style lang='less' scoped>
// 导入css样式文件
@import '@/assets/css/base.css';
</style>