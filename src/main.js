import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from '@/components/common/toast/index.js'
import fastClick from 'fastclick'
import vuelazyload from 'vue-lazyload'

Vue.config.productionTip = false

// 解决移动端300ms延迟
fastClick.attach(document.body)
    // 使用懒加载插件
Vue.use(vuelazyload, {
    loading: require('@/assets/imgs/common/placeholder.png')
})

Vue.prototype.$bus = new Vue()
Vue.use(toast)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


// import { request } from "@/network/request.js"

// request({
//     url: '/home/multidata'
// }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })