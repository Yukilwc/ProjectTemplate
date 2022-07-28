import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "@/style/default.scss";
import { usePermission } from "./usePermission";
import { createPinia } from "pinia";
import { useUserStore } from "./store/user";
import { registerFunctions } from "./plugins/registerFunctions";
import { registerComponents } from "./plugins/registerComponents";
const pinia = createPinia();

const { initPermission } = usePermission();
initPermission(router);

// ============================================================ 样式 START
import "@/style/coverVant";
// ============================================================ 样式 END

const app = createApp(App);
app.use(router);
app.use(pinia);
const userStore = useUserStore();
userStore.loadUserInfoFromBrowser();
app.use(registerFunctions);
app.use(registerComponents);
app.mount("#app");
