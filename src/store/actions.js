export default {

    addCart(context, payload) {
        // state.cartList.push(payload)
        //判断添加的商品是否已经存在 
        // let flag = false
        // for (let item of context.state.cartList) {
        //     if (item.iid == payload.iid) {
        //         flag = true
        //     }
        // }
        return new Promise((resolve, reject) => {

            let oldProduct = context.state.cartList.find(item => item.iid == payload.iid)
            if (oldProduct) {
                // payload.count++
                // console.log('已经存在');
                // oldProduct.count += 1;
                // console.log(oldProduct);
                context.commit('addCounter', oldProduct)
                resolve('当前商品数量+1')
            } else {
                // console.log('不存在，新的');
                payload.count = 1
                    // console.log(payload);
                    //     // state.cartList.push(payload)
                    // context.commit('addCart', oldProduct)
                context.commit("addToCart", payload)
                resolve('添加商品成功')
            }
        })
    }
}