// 全局组件注册
// import GlobalTest from "@/components/GlobalTest.vue";
// import * as Icons from '@element-plus/icons-vue'

import type { App, Plugin } from "vue";

const registerComponents: Plugin = {
  install: (app: App, options: any) => {
    // console.log('========== registerComponents 插件安装',)
    // app.component("Navbar", Navbar)
    // Object.keys(Icons).forEach(key => {
    //     app.component(key, Reflect.get(Icons,key))
    // })
    // app.component("GlobalTest", GlobalTest);
  },
};
export { registerComponents };
