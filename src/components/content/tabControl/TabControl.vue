<template>
  <div class="tabControl">
    <div v-for="(item,index) in titles" :key="item.id" class="tabControlItem" :class="{active:index==currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    },
  },
}
</script>

<style scoped lang='less'>
.tabControl {
  display: flex;
  text-align: center;
  font-size: 16px;
  background-color: #fff;
}

.tabControlItem {
  flex: 1;
  height: 40px;
  line-height: 40px;
  span {
    padding: 3px;
  }
}

.active {
  color: var(--color-high-text);
  span {
    border-bottom: 2px solid var(--color-tint);
  }
}
</style>