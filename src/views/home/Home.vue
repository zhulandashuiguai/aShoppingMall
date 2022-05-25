<template>
  <div id="home">
    <!-- 头部导航部分 -->
    <nav-bar class="home-nav">
      <template #center>
        <div>购物车</div>
      </template>
    </nav-bar>
    <!-- tabControl组件 -->
    <tab-control class="tabControl" :titles="['流行','新款','精选']" @tabClick='tabClick' ref="RefTabControl1" v-show="isTabControlFixed"></tab-control>

    <!--  -->
    <scroll class="content" ref="RefScroll" :probeType="3" @scrollPosition="scrollPosition" :pullUpLoad="true" @pullingUp="loadMore">
      <!-- 轮播图模块 -->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <!-- 推荐模块 -->
      <HomeRecommendView :recommends='recommends'></HomeRecommendView>
      <!-- 图片feature组件 -->
      <home-feature-view></home-feature-view>
      <!-- tabControl组件 -->
      <tab-control :titles="['流行','新款','精选']" @tabClick='tabClick' ref="RefTabControl2"></tab-control>
      <!-- GoodsList组件 -->
      <goods-list :goods="goodsData"></goods-list>
    </scroll>
    <!-- backTop -->
    <back-top @click.native="backClick" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>
// 导入导航组件
import NavBar from '@/components/common/navbar/NavBar.vue'
// 导入tabcontrol组件
import TabControl from '@/components/content/tabControl/TabControl'
//导入 GoodsList组件
import GoodsList from '@/components/content/goods/GoodsList'
// backTop组件
import BackTop from '@/components/content/backTop/BackTop.vue'

// 导入轮播图子组件
import HomeSwiper from './childrenComponents/HomeSwiper.vue'
// 导入recommend子组件
import HomeRecommendView from './childrenComponents/HomeRecommendView.vue'
// 导入图片组件
import HomeFeatureView from './childrenComponents/HomeFeatureView.vue'

// 数据请求
import { getHomeMultidata, getHomeGoodsData } from '@/network/home.js'

// 导入betterScroll插件
// import BScroll from 'better-scroll'
import Scroll from '@/components/common/scroll/Scroll.vue'
// 防抖函数
// import { debounce } from '@/common/utils.js'
export default {
  data() {
    return {
      // result: '',
      // 分开保存变量
      banners: [],
      recommends: [],
      // tabControl里要请求的数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: 'pop',
      isBackTopShow: false,
      // tabControl顶部偏移量
      tabOffsetTop: 0,
      isTabControlFixed: false,
      // 记录切出组件时的滚动位置

      saveY: 0,
    }
  },
  computed: {
    goodsData() {
      return this.goods[this.currentType].list
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  created() {
    // 1.轮播图数据请求
    this.getHomeMultidata()
    //2.请求tabControl里的goods商品数据
    this.getHomeGoodsData('pop')
    this.getHomeGoodsData('new')
    this.getHomeGoodsData('sell')
    // 监听item中图片加载完成
  },
  mounted() {
    // const refresh = debounce(this.$refs.RefScroll.scroll.refresh, 500)
    // this.$bus.$on('itemImageLoad', () => {
    // 注意函数不要加()不然把函数的返回值传进去了
    // refresh()
    // })
    //
  },
  methods: {
    /**
     * 网络请求相关的方法
     */
    // 获取轮播图数据
    getHomeMultidata() {
      // 1.请求多个数据
      getHomeMultidata().then((res) => {
        // 请求回来的数据要存起来，不然数据在函数执行完就消失了
        // console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
      //
    },
    // 请求tabControl里的goods数据
    getHomeGoodsData(type) {
      const page = this.goods[type].page + 1
      getHomeGoodsData(type, page).then((res) => {
        // console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
        // 结束上拉加载更多,网络请求是异步的所以必须写在这里
        this.$refs.RefScroll.scroll.finishPullUp()
      })
    },
    /**
     *事件监听相关的方法
     */
    // 获取子组件传过来的点击的index数据
    tabClick(index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.RefTabControl1.currentIndex = index
      this.$refs.RefTabControl2.currentIndex = index
    },
    backClick() {
      // console.log('clcik')
      this.$refs.RefScroll.scroll.scrollTo(0, 0, 500)
    },
    // 根据滚动位置完成事件
    scrollPosition(position) {
      // console.log(position)
      // 1.判断backtop是否显示
      this.isBackTopShow = -position.y > 1000
      // 2.决定tabcontrol是否吸顶
      this.isTabControlFixed = -position.y >= this.tabOffsetTop
    },
    // 加载更多
    loadMore() {
      // console.log('上拉加载更多！')
      this.getHomeGoodsData(this.currentType)
      // 刷新页面数据，保证滑动效果不出bug，计算出正确的高度
      // this.$refs.RefScroll.scroll.refresh()
    },
    // 图片加载完成
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.RefTabControl2.$el.offsetTop
      // console.log(this.$refs.RefTabControl.$el.offsetTop)
    },
  },
  // 解决切换回来时保留位置的问题
  activated() {
    this.$refs.RefScroll.scrollTo(0, this.saveY)
    this.$refs.RefScroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.RefScroll.getScrollY()
    // console.log(this.$refs.RefScroll.scroll)
  },
}
</script>

<style lang='less' scoped>
#home {
  height: 100vh;
  // padding-top: 44px;
  position: relative;
}
.home-nav {
  background-color: rgb(255, 130, 151);
  color: #fff;
  // 原生滚动时才加，用better-scroll就不用加
  // z-index: 99;
  // position: sticky;
  // left: 0;
  // top: 0;
  // right: 0;
}

.tabControl {
  position: relative;
  // top: 44px;
  // z-index只对定位的元素有效果
  z-index: 9;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}

// .fixed {
//   position: fixed;
//   left: 0;
//   right: 0;
//   top: 44px;
// }
</style>