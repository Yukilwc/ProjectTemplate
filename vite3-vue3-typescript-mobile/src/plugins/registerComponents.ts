// 全局组件注册
import GlobalTest from "@/components/GlobalTest.vue";
import { Plugin, App } from "vue";
// import * as Icons from '@element-plus/icons-vue'

const registerComponents: Plugin = {
  install: (app: App, options) => {
    // console.log('========== registerComponents 插件安装',)
    // app.component("Navbar", Navbar)
    // Object.keys(Icons).forEach(key => {
    //     app.component(key, Reflect.get(Icons,key))
    // })
    app.component("GlobalTest", GlobalTest);
  },
};
export { registerComponents };
