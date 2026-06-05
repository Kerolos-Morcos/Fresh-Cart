import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import { useAuthStore } from "@/stores/authStore";

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
          meta: { breadcrumb: "About" },
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("../pages/Profile.vue"),
          meta: { requiresAuth: true, breadcrumb: "Profile" },
          children: [
            {
              path: "addresses",
              name: "profile-addresses",
              component: () => import("../pages/Addresses.vue"),
              meta: { requiresAuth: true },
            },
            {
              path: "settings",
              name: "profile-settings",
              component: () => import("../pages/Settings.vue"),
              meta: { requiresAuth: true },
            },
          ],
        },
        {
          path: "brands",
          name: "brands",
          component: () => import("../pages/Brands.vue"),
          meta: { breadcrumb: "Brands" },
        },
        {
          path: "shop",
          name: "shop",
          component: () => import("../pages/Shop.vue"),
          meta: { breadcrumb: "Shop" },
        },
        // {
        //   path: "search",
        //   name: "search",
        //   component: () => import("../pages/Search.vue"),
        //   meta: { breadcrumb: "Search" },
        // },
        {
          path: "register",
          name: "register",
          component: () => import("../pages/Register.vue"),
          meta: { requiresGuest: true, breadcrumb: "Register" },
        },
        {
          path: "login",
          name: "login",
          component: () => import("../pages/Login.vue"),
          meta: { requiresGuest: true },
        },
        {
          path: "product/:id",
          name: "productDetails",
          component: () => import("../pages/ProductDetails.vue"),
        },
        {
          path: "wishlist",
          name: "wishlist",
          component: () => import("../pages/Wishlist.vue"),
        },
        {
          path: "contact",
          name: "contact",
          component: () => import("../pages/Contact.vue"),
        },
        {
          path: "categories",
          name: "categories",
          component: () => import("../pages/Categories.vue"),
        },
        {
          path: "categories/:id",
          name: "categoriesList",
          component: () => import("../components/categories/SubCategories.vue"),
        },
        {
          path: "cart",
          name: "cart",
          component: () => import("../pages/Cart.vue"),
        },
        {
          path: "help",
          name: "help",
          component: () => import("../pages/HelpCenter.vue"),
        },
        {
          path: "checkout",
          name: "checkout",
          component: () => import("../pages/Checkout.vue"),
          meta: { requiresAuth: true, breadcrumb: "Checkout" },
        },
        {
          path: "orders",
          name: "orders",
          component: () => import("../pages/Orders.vue"),
          alias: "/allorders",
          meta: { requiresAuth: true },
        },
        {
          path: "forgotPassword",
          name: "forgotPassword",
          component: () => import("../pages/ForgotPassword.vue"),
          meta: { requiresGuest: true, title: "Forgot Password | Fresh Cart" },
        },
        {
          path: "/:pathMatch(.*)*",
          name: "not-found",
          component: () => import("../pages/NotFound.vue"),
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
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach((to, from) => {
  const authStore = useAuthStore();
  const isLoggedIn = authStore.isLoggedUser;
  document.title = to.meta.title || "Fresh Cart";
  if (to.meta.requiresAuth && !isLoggedIn) {
    return { name: "login" };
  } else if (to.meta.requiresGuest && isLoggedIn) {
    return { name: "home" };
  } else {
    return true;
  }
});

export default router;
