<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.id" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style lang='less' scoped>
.recommend {
  width: 100%;
  display: flex;
  // justify-content: space-between;
  text-align: center;
  padding: 15px 0 20px;
  border-bottom: 10px solid #eee;
}

.recommendItem {
  flex: 1;
  img {
    width: 70px;
    margin-bottom: 6px;
  }
}
</style>