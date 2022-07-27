import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "@/style/default.scss"

const app = createApp(App);
app.use(router)
app.mount("#app");
