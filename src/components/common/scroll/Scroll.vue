<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import ObserveImage from '@better-scroll/observe-image'
import ObserveDOM from '@better-scroll/observe-dom'
BScroll.use(ObserveDOM)
BScroll.use(ObserveImage)
export default {
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeImage: true, // 开启 observe-image 插件
      observeDOM: true, // 开启 observe-dom 插件
    })
    // 2.监听滚动的位置
    this.scroll.on('scroll', (position) => {
      // console.log(position)
      this.$emit('scrollPosition', position)
    })
    // // 3.监听上拉加载事件(滚动到底部)
    this.scroll.on('pullingUp', () => {
      // console.log('上拉')
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    },
  },
}
</script>

<style scoped lang="less">
</style>