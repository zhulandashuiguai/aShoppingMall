<template>
  <div class="bottomBar">
    <div class="checkAll">
      <check-button class="checkBtn" :isChecked="isSelectAll" @click.native="checkAllBtn"></check-button>
      <span>全选</span>
    </div>
    <div class="total">合计：￥{{totalPrice}} </div>
    <div class="calculate" @click="calClick">
      去计算({{checkedLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton.vue'

export default {
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => item.checked)
        .reduce((pre, next) => {
          return pre + next.price * next.count
        }, 0)
        .toFixed(2)
    },
    checkedLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length
    },
    isSelectAll() {
      if (this.$store.state.cartList.length == 0) {
        return false
      } else {
        return this.$store.state.cartList.every((item) => item.checked)
      }
    },
  },
  components: {
    CheckButton,
  },
  methods: {
    checkAllBtn() {
      if (this.isSelectAll) {
        this.$store.commit('cancelCheckAll')
      } else {
        this.$store.commit('checkAll')
      }
    },
    calClick() {
      if (!this.checkedLength) {
        this.$toast.show('请选择商品')
      }
    },
  },
}
</script>

<style scoped lang="less">
.bottomBar {
  height: 40px;
  background-color: #eee;
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
}
.checkAll {
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  width: 100px;
}
.checkBtn {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.total {
  flex: 1;
}

.bottomBar {
  display: flex;
  align-items: center;
}

.calculate {
  height: 100%;
  width: 90px;
  background-color: red;
  color: #fff;
  line-height: 40px;
  text-align: center;
}
</style>