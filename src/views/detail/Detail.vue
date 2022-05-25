<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" ref="detailNav" @titleClick="titleClick"></detail-nav-bar>
    <scroll class="content" ref="RefScroll" :probeType="3" :pullUpLoad="true" @scrollPosition="contentPosition">

      <detail-swiper :topImages="topImages"></detail-swiper>

      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <detail-shop-info :shopInfo="shop"></detail-shop-info>
      <detail-goods-info :goodsInfo="detailInfo" @goodsInfoImgLoad="goodsInfoImgLoad"></detail-goods-info>
      <detail-param-info ref="params" :paramInfo="paramInfo"></detail-param-info>
      <DetailCommentInfo ref="comment" :commentInfo="commentInfo"></DetailCommentInfo>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
    <BackTop @click.native="backClick" v-show="isBackTopShow"></BackTop>
    <DetailBottomBar @addCart="addCart" />
    <!-- <toast message="哈哈哈"></toast> -->
  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar.vue'
import DetailSwiper from './childComponents/DetailSwiper.vue'
import DetailBaseInfo from './childComponents/DetailBaseInfo.vue'
import DetailShopInfo from './childComponents/DetailShopInfo.vue'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo.vue'
import DetailParamInfo from './childComponents/DetailParamInfo.vue'
import DetailCommentInfo from './childComponents/DetailCommentInfo.vue'
import DetailBottomBar from './childComponents/DetailBottomBar.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
// import Toast from '@/components/common/toast/Toast.vue'

import Scroll from '@/components/common/scroll/Scroll.vue'

import { getDetail, Goods, Shop, GoodsParams, getRecommend } from '@/network/detail.js'
import { debounce } from '@/common/utils.js'
// 导入混入对象
import { backTopMixin } from '@/common/mixin.js'
export default {
  name: 'Detail',
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      // detailImages: [],
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
    }
  },

  created() {
    // 1.保存传入的id
    this.iid = this.$route.params.iid
    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      const data = res.result
      // 1.获取顶部的轮播图片数据
      this.topImages = data.itemInfo.topImages
      // console.log(res)
      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 3.获取店铺信息
      this.shop = new Shop(data.shopInfo)
      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo
      //5.获取参数信息
      this.paramInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule)
      // 6.取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
      // 7.亲求评论数据
      getRecommend().then((res) => {
        // console.log(res)
        this.recommends = res.data.list
      })
      // 给getThemeTopY赋值
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
        // console.log(this.themeTopYs)
      }, 100)
    })
  },
  updated() {
    // this.themeTopYs = []
    // this.themeTopYs.push(0)
    // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
    // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
    // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
    // console.log(this.themeTopYs)
  },
  methods: {
    goodsInfoImgLoad() {
      // this.$refs.scroll.scroll.refresh()
      // this.themeTopYs = []
      // this.themeTopYs.push(0)
      // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      // console.log(this.themeTopYs)
      this.getThemeTopY()
    },
    titleClick(index) {
      // console.log(index)
      this.$refs.RefScroll.scrollTo(0, -this.themeTopYs[index], 500)
    },
    contentPosition(position) {
      // console.log(position)
      // 1.获取y值
      const positionY = -position.y
      // 2.positionY和组件中的位置[0,y1,y2,y3]进行对比
      // positon在0-y1之间index是0,在y1到y2之间是1....
      let length = this.themeTopYs.length
      for (let i = 0; i < length - 1; i++) {
        // console.log(i)
        if (this.currentIndex !== i && i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) {
          this.currentIndex = i
          // console.log(i)
          this.$refs.detailNav.currentIndex = i
        }
        // if (this.currentIndex !== i && i == length - 1 && positionY >= this.themeTopYs[i]) {
        //   this.currentIndex = i
        //   // console.log(i)
        //   this.$refs.detailNav.currentIndex = i
        // }
      }
      // 利用混入,判断是否回到顶部
      this.listenBackTopShow(position)

      //
    },
    addCart() {
      // console.log('------')
      // 1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      // console.log(this.goods)
      // 2.将商品添加到购物车里
      this.$store.dispatch('addCart', product).then((res) => {
        // console.log(res)
        this.$toast.show(res)
      })
      // setTimeout(() => {
      //   this.$bus.$emit('addCompelete')
      // }, 1000)
    },
  },

  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    Scroll,
    DetailBottomBar,
    // Toast,
  },
}
</script>

<style scoped lang='less'>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  // overflow: hidden;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>