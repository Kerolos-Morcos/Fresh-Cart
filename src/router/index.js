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
        {
          path: "shop",
          name: "shop",
          component: () => import("../pages/Shop.vue"),
        },
        {
          path: "register",
          name: "register",
          component: () => import("../pages/Register.vue"),
        },
        {
          path: "login",
          name: "login",
          component: () => import("../pages/Login.vue"),
        },
      ],
    },
    // For Not Displaying Nav & Footer
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "not-found",
    //   component: () => import("../pages/NotFound.vue"),
    // },
  ],
});

export default router;
