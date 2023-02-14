import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import { usePermission } from "./usePermission";
import "element-plus/dist/index.css";

import "@/style/default.scss";
import { registerComponents } from "@/plugins/registerComponents";
const { initPermission } = usePermission();
initPermission(router);
const app = createApp(App);
app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.use(createPinia());
app.use(router);
app.use(registerComponents);

app.mount("#app");
