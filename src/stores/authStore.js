import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "./cartStore";

export const useAuthStore = defineStore("authStore", () => {
  const router = useRouter();
  const token = ref(null);
  const user = ref(null);

  const isLoggedUser = computed(() => {
    return token.value ? true : false;
  });

  function initializeToken() {
    const tokenFromStorage = localStorage.getItem("token");
    const userFromStorage = localStorage.getItem("user");
    if (tokenFromStorage) {
      token.value = tokenFromStorage;
      isLoggedUser.value = true;
    }
    if (userFromStorage) {
      user.value = JSON.parse(userFromStorage);
    }
  }

  //   Logout
  const cartStore = useCartStore();
  function logout() {
    token.value = null;
    user.value = null;
    cartStore.cartData = [];
    cartStore.numOfCartItems = 0;
    cartStore.totalCartPrice = 0;
    cartStore.cartId = null;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push({ name: "login" });
  }

  return {
    token,
    user,
    isLoggedUser,
    initializeToken,
    logout,
  };
});
