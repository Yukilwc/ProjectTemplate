import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "@/style/default.scss";
import { usePermission } from "./usePermission";
import { createPinia } from "pinia";
import { useUserStore } from "./store/user";
import { registerFunctions } from "./plugins/registerFunctions";
import { registerComponents } from "./plugins/registerComponents";
import { useRem } from "./utils/useRem";

const { initPermission } = usePermission();
initPermission(router);
const { initRem } = useRem();
initRem();
// ============================================================ 样式 START
import "@/style/coverVant";
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
