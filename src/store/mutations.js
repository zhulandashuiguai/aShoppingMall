export default {
    addCounter(state, payload) {
        // console.log('数量加1');
        // console.log(payload);
        payload.count++
            // console.log('加1完成');
            // console.log(payload);
    },
    addToCart(state, payload) {
        payload.checked = true
        state.cartList.push(payload)
    },
    cancelCheckAll(state) {
        state.cartList.forEach(
            item => item.checked = false
        )
    },
    checkAll(state) {
        state.cartList.forEach(item => item.checked = true)
    }

}