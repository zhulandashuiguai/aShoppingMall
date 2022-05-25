<template>
  <!-- 按钮是个块级元素，和文字在一行可以用flex布局 -->
  <div class="checkButton" :class="{checked:isChecked}">
    <img src="@/assets/imgs/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scooped>
.checkButton {
  height: 20px;
  border-radius: 50%;
  border: 2px solid #aaa;
}

.checked {
  border-color: red;
  background-color: red;
}
</style>