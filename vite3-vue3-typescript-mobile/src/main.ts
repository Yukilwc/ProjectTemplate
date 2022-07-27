import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "@/style/default.scss";
import { usePermission } from "./usePermission";
const { initPermission } = usePermission();
initPermission(router);

const app = createApp(App);
app.use(router);
app.mount("#app");
