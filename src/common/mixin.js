// backTop组件
import BackTop from '@/components/content/backTop/BackTop.vue'
export const backTopMixin = {
    data() {
        return {
            isBackTopShow: false,
        }
    },
    methods: {
        backClick() {
            // console.log('clcik')
            this.$refs.RefScroll.scrollTo(0, 0, 500)
        },
        listenBackTopShow(position) {
            // 1.判断backtop是否显示
            this.isBackTopShow = -position.y > 1000
        }
    },
    components: {
        BackTop
    }
}