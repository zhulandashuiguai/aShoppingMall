import { request } from "./request";
// 
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

// 请求tabControl里的goods数据
export function getHomeGoodsData(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })

}