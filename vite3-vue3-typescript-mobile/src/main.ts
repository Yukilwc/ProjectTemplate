import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { usePermission } from "./usePermission";
import { createPinia } from "pinia";
import { useUserStore } from "./store/user";
import { registerFunctions } from "./plugins/registerFunctions";
import { registerComponents } from "./plugins/registerComponents";
import { useRem } from "./utils/useRem";

// ============================================================ 启动前的初始化工作 START

const { initPermission } = usePermission();
initPermission(router);
// ============================================================ 启动前的初始化工作  END

// ============================================================ 样式 START
const { initRem } = useRem();
initRem();
import "@/style/vant/coverVant";
import "@/style/default.scss";
// ============================================================ 样式 END

const app = createApp(App);
app.use(router);

// ============================================================ pinia全局状态 START
const pinia = createPinia();
app.use(pinia);
// ============================================================ pinia全局状态 END
const userStore = useUserStore();
userStore.loadUserInfoFromBrowser();
app.use(registerFunctions);
app.use(registerComponents);
app.mount("#app");
