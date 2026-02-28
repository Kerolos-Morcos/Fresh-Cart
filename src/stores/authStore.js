import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("authStore", () => {
  const router = useRouter();
  const token = ref(null);

  const isLoggedUser = computed(() => {
    return token.value ? true : false;
  });

  function initializeToken() {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage) {
      token.value = tokenFromStorage;
      isLoggedUser.value = true;
    }
  }

  //   Logout
  function logout() {
    token.value = null;
    localStorage.removeItem("token");
    router.replace({ name: "login" });
  }

  return {
    token,
    isLoggedUser,
    initializeToken,
    logout,
  };
});
