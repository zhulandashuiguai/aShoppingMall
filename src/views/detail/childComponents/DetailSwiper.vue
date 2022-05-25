<template>
  <!-- 不能用div包，不然轮播图只显示一张图片 -->
  <swiper class="swiper1">
    <swiper-item v-for="item in topImages" :key="item.id">
      <img :src="item" alt="" class="detailImg">
    </swiper-item>
  </swiper>

</template> 

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper/index.js'
export default {
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
}
</script>

<style scoped lang="less">
.swiper1 {
  height: 300px;
  overflow: hidden;
}

.detailImg {
  width: 100%;
}
</style>