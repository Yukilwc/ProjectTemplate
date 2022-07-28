import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "@/style/default.scss";
import { usePermission } from "./usePermission";
import { createPinia } from "pinia";
import { useUserStore } from "./store/user";
import { registerFunctions } from "./plugins/registerFunctions";
const pinia = createPinia();

const { initPermission } = usePermission();
initPermission(router);

const app = createApp(App);
app.use(router);
app.use(pinia);
const userStore = useUserStore();
userStore.loadUserInfoFromBrowser();
app.use(registerFunctions)
app.mount("#app");
