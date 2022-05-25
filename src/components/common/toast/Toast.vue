<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  // props: {
  //   message: {
  //     type: String,
  //     default: '',
  //   },
  //   isShow: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  data() {
    return {
      message: '',
      isShow: false,
      timer: null,
    }
  },
  methods: {
    show(message, duration = 2000) {
      clearTimeout(this.timer)
      this.isShow = true
      this.message = message
      // timer = setTimeout(() => {
      //   this.isShow = false
      //   this.message = ''
      // }, duration)
      this.debounce(duration)
    },
    // 防抖优化
    debounce(duration) {
      this.timer = setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration)
    },
  },
}
</script>

<style scoped lang="less">
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  z-index: 999;
}
</style>