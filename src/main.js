import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { createPinia } from "pinia";
import "vue3-carousel/carousel.css";
import PrimeVue from "primevue/config";

const app = createApp(App);
const pinia = createPinia();

app.use(Vue3Toastify, {
  autoClose: 3000,
  position: "top-right",
  pauseOnHover: false,
});

app.use(pinia);
app.use(PrimeVue);
app.use(router);

app.mount("#app");
