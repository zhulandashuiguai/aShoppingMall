<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot name="item-icon" v-if="!isActive"></slot>
    <slot name="item-icon-active" v-else></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default: 'red',
    },
  },
  data() {
    return {
      // isActive: true,
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path).catch((err) => {})
    },
  },
}
</script>

<style lang="less" scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px; //一般都是这么高
  font-size: 14px;
  img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
}

// .active {
//   color: red;
// }
</style>