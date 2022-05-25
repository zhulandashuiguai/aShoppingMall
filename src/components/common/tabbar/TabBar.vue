<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
@import '@/assets/css/base.css';
.tab-bar {
  display: flex;
  position: fixed;
  background-color: #f6f6f6;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 6px rgba(0, 0, 0, 0.2);
}
</style>