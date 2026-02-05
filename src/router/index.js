import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../pages/Home.vue"),
        },
        {
          path: "about",
          name: "about",
          component: () => import("../pages/About.vue"),
        },
        {
          path: "brands",
          name: "brands",
          component: () => import("../pages/Brands.vue"),
        },
      ],
    },
    // For Not Displaying Nav & Footer
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
