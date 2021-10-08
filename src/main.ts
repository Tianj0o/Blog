import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "@/assets/font/font.css";
import { setupStore } from "@/store";
//防止刷新
setupStore();
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
