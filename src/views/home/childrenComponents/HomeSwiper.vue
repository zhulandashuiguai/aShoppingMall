<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper/index.js'
export default {
  data() {
    return {
      isLoad: false,
    }
  },
  props: {
    banners: {
      type: Array,
      default: [],
    },
  },

  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad() {
      // console.log('---------')
      // 图片加载完把事件传出去
      // 只拿一次高度就行了，所以这里用了节流阀来控制次数
      if (!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    },
  },
}
</script>

<style scoped>
</style>