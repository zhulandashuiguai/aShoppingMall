import Toast from '@/components/common/toast/Toast.vue'
import Vue from 'vue'

const obj = {}
obj.install = function(vue) {
    // console.log('install函数');
    // 把toast组件挂载到body里面去
    // 1.创建组件构造器
    const toastConstructor = Vue.extend(Toast)
        // 2.new方式根据组件构造器创建出一个组件对象
    const toast = new toastConstructor()
        // 3.将组件对象手动挂载到某一元素上
    toast.$mount(document.createElement('div'))
        // 4.toast.$el对应的就是div
    document.body.appendChild(toast.$el)
        // 挂载组件构造器创建出来的这个对象
    vue.prototype.$toast = toast;
}

export default obj