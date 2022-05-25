<template>
  <div>
    <nav-bar>
      <template #left>
        <div class="back" @click="backClick">
          <img src="@/assets/imgs/common/back.svg" alt="">
        </div>
      </template>

      <template #center>
        <div class="title">
          <div v-for="(item, index) in titles" :key="item.id" class="titleItem" :class="{active:index==currentIndex}" @click="titleClick(index)">
            {{item}}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    }
  },
  components: {
    NavBar,
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    },
  },
}
</script>

<style scoped lang="less">
.title {
  display: flex;
  font-size: 13px;
}
.titleItem {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.back img {
  // margin-top: 12px;
  vertical-align: middle;
}
</style>