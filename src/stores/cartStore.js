import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useAuthStore } from "./authStore";
import { useAPI } from "@/composables/useAPI";
import { watch } from "vue";

export const useCartStore = defineStore("cartStore", () => {
  const cartData = ref([]);
  const numOfCartItems = ref(0);
  const cartId = ref(null);
  const totalCartPrice = ref(0);

  const authStore = useAuthStore();
  const { fetchData, isLoading } = useAPI();

  const existingCartData = computed(() => {
    const data = Array.isArray(cartData.value) ? cartData.value : [];
    if (authStore.isLoggedUser) {
      return data;
    } else {
      return data.map((product) => ({
        product,
        count: product.count || 1,
        price: product.price,
      }));
    }
  });

  async function getUserCart() {
    const data = await fetchData({ url: "/v2/cart", method: "get" });
    cartData.value = data?.data?.products || [];
    numOfCartItems.value = data?.numOfCartItems || 0;
    cartId.value = data?.data?._id || null;
    totalCartPrice.value = data?.data?.totalCartPrice || 0;
    return data;
  }

  function loadGuestCart() {
    const cart = JSON.parse(localStorage.getItem("guestCart") || "[]");
    cartData.value = Array.isArray(cart) ? cart : [];
    numOfCartItems.value = cartData.value.length;
  }

  function initCart() {
    if (authStore.isLoggedUser) {
      getUserCart();
    } else {
      loadGuestCart();
    }
  }

  function resetCart() {
    cartData.value = [];
    numOfCartItems.value = 0;
    cartId.value = null;
    totalCartPrice.value = 0;
  }

  async function mergeGuestCart() {
    const guestCart = JSON.parse(localStorage.getItem("guestCart") || "[]");
    if (guestCart.length === 0) {
      await getUserCart();
      return;
    }
    for (const product of guestCart) {
      await fetchData({
        url: "/v2/cart",
        method: "post",
        data: { productId: product._id || product.id },
      });
    }
    localStorage.removeItem("guestCart");
    await getUserCart();
  }

  watch(
    () => authStore.isLoggedUser,
    (isLogged) => {
      if (isLogged) {
        mergeGuestCart();
      } else {
        resetCart();
        loadGuestCart();
      }
    },
  );

  return {
    cartData,
    numOfCartItems,
    cartId,
    totalCartPrice,
    existingCartData,
    getUserCart,
    isLoading,
    initCart,
    mergeGuestCart,
    loadGuestCart,
    resetCart,
  };
});
