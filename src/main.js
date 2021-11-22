import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import devtools from "@vue/devtools";

// if (process.env.NODE_ENV === "development") {
//   devtools.connect("http://localhost", "8080");
// }

createApp(App)
  .use(router)
  .mount("#app");
