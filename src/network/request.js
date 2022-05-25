import axios from "axios"

export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
            baseURL: 'http://152.136.185.210:7878/api/hy66',
            timeout: 5000
        })
        // 请求拦截器
    instance.interceptors.request.use(config => {
            // do something
            return config
        }, err => {
            return Promise.reject(err)
        })
        // 响应拦截器
    instance.interceptors.response.use(response => {
            // do something
            return response.data
        }, err => {
            return Promise.reject(err)
        })
        // 返回实例
    return instance(config)
        // return new Promise(function(resolve, reject) {
        //         //     // 发送真正的网络请求
        //         // instance(config)
        //         //     .then(res => {
        //         //         // config.success(res)
        //         //         resolve(res)
        //         //     })
        //         //     .catch(err => {
        //         //         // config.failure(err)
        //         //         reject(err)
        //         //     })
        // })
}