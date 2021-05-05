// 增加了权限，需要同步修改 form的文件下载方式也需要修改
// 封装异步请求发送，包括需要auth的请求和不需要验证的请求
import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
import VueRouter from '@/router/index'
import { setToken, getToken } from '@/utils/auth'
import { sysSource, baseURL } from '@/config'
// 默认请求域名配置
// 通用json请求用服务
const service = axios.create({
    baseURL: baseURL, // api 的 base_url
    // 增加时间
    timeout: 30000 // request timeout
})
// 文件下载用服务
const serviceFile = axios.create({
    baseURL: baseURL, // api 的 base_url
})
// request interceptor ,主要负责接口请求时，apiKey的发送,校验权限
// service.interceptors.request.use(
//     config => {
//         if (getToken()) {
//             config.headers['Authorization'] = getToken()||''
//         } 
//         else {
//             //   跳转登录
//             VueRouter.push({
//                 path: '/login'
//             })
//         }
//         return config
//     },
//     error => {
//         console.log(error) // for debug
//         Promise.reject(error)
//     }
// )
// 定义json请求实例的响应拦截器
service.interceptors.response.use(
    response => {
        const data = response.data
        // 
        console.log('==========拦截器正常返回response', response)
        if (+data.code !== 0) {
            // 后端返回错误码，进行错误提示，并将响应体以错误形式向后传递.此处noMsgHandle存在时，不处理消息提示 
            if (data.data && !response.config.noMsgHandle) {
                Message({
                    message: data.data,
                    type: 'error',
                    duration: 3 * 1000
                })
            }
            return Promise.reject(response.data)
        } else {
            return Promise.resolve(response.data)
        }
    },
    error => {
        // 请求报错，进行错误提示，并将错误体向后传递
        console.error('==========拦截器异常捕获err', error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 3 * 1000
        })
        return Promise.reject(error)
    }
)
// 此处需要三端同步
export function jsonPost({ url, params }, specialConfig = {}) {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken() || ''
        },
        noMsgHandle: specialConfig.noMsgHandle ? true : false
    }
    return service.post(url, params, config).then(response => {
        // console.log('==========接口正常返回', response)
        return Promise.resolve(response);
    }).catch(msg => {
        console.error('==========接口异常捕获', msg)
        return Promise.reject(msg)
    })
}
// 文件上传用接口
export function fileUploadPost({ url, formData, onUploadProgress }) {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': getToken() || ''
        },
        onUploadProgress: onUploadProgress ? onUploadProgress : (e) => { }
    }
    return serviceFile.post(url, formData, config).then(response => {
        return Promise.resolve(response.data);
    }).catch(msg => {
        console.error('==========接口异常捕获', msg)
        return Promise.reject(msg)
    })
}
// 文件下载用接口
export function fileDownloadPost({ url, params }) {
    const config = {
        // onUploadProgress: onUploadProgress ? onUploadProgress : (e) => { }
        // headers: { 'Content-Type': 'multipart/form-data' },
        responseType: 'blob',
        headers: {
            'Authorization': getToken() || ''
        }
    }
    return serviceFile.post(url, qs.stringify(params), config).then(response => {
        return Promise.resolve(response);
    }).catch(msg => {
        console.error('==========接口异常捕获', msg)
        return Promise.reject(msg)
    })
}
//  需要修改物流form表单模式下载的权限