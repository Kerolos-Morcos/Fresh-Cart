import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { createPinia } from "pinia";
import "vue3-carousel/carousel.css";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);
const pinia = createPinia();

app.use(VueSweetalert2);

app.use(Vue3Toastify, {
  autoClose: 3000,
  position: "top-right",
  pauseOnHover: false,
});

app.use(pinia);
// app.use(PrimeVue);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false, // عشان ميأثرش على الـ dark mode بتاعك
    },
  },
});
app.use(router);

app.mount("#app");
