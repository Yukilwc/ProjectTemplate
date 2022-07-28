// 全局方法注册

import { Plugin, App } from 'vue'
// import { useMiddlewares } from '@/middlewares/useMiddlewares'
// import { isMobile } from '@/middlewares/device'
const registerFunctions: Plugin = {
    install: (app: App, options) => {
        console.log('==========  registerFunctions插件安装',)
    //    globalAPI = API
        // provide更多是传入响应式值，进行深层次组件通信的,不再使用其作为全局变量注入
        // app.provide("byId",()=>{
        //     return 'byId'
        // })
        app.config.globalProperties.$globalUrl= 'global url'
    }

}

export {
    registerFunctions,
}