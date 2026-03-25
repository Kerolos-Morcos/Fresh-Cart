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
  const loadingAdd = ref(null);
  const loadingRemove = ref(null);
  const loadingCart = ref(false);
  const loadingDelete = ref(null);
  const mergingGuestCart = ref(false);

  const authStore = useAuthStore();
  const { fetchData } = useAPI();

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
    loadingCart.value = true;
    const data = await fetchData({ url: "/v2/cart", method: "get" });
    cartData.value = data?.data?.products || [];
    numOfCartItems.value = data?.numOfCartItems || 0;
    cartId.value = data?.data?._id || null;
    totalCartPrice.value = data?.data?.totalCartPrice || 0;
    loadingCart.value = false;
    return data;
  }

  function loadGuestCart() {
    const cart = JSON.parse(localStorage.getItem("guestCart") || "[]");
    cartData.value = Array.isArray(cart) ? cart : [];
    numOfCartItems.value = cartData.value.length;
  }

  function isProductInCart(productId) {
    const data = Array.isArray(cartData.value) ? cartData.value : [];
    if (authStore.isLoggedUser) {
      return data.some(
        (item) =>
          item?.product?.id === productId || item?.product?._id === productId,
      );
    } else {
      return data.some(
        (item) => item?.id === productId || item?._id === productId,
      );
    }
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
    mergingGuestCart.value = true;
    for (const product of guestCart) {
      await fetchData({
        url: "/v2/cart",
        method: "post",
        data: { productId: product._id || product.id },
      });
    }
    localStorage.removeItem("guestCart");
    await getUserCart();
    mergingGuestCart.value = false;
  }

  async function updateCount(count, type, item) {
    if (type === "add") loadingAdd.value = item._id;
    if (type === "remove") loadingRemove.value = item._id;

    if (count < 1) return;
    const index = cartData.value.findIndex((i) => i._id === item._id);
    if (index !== -1) {
      cartData.value[index].count = count;
    }

    try {
      if (authStore.isLoggedUser) {
        const data = await fetchData({
          url: `/v2/cart/${item._id}`,
          method: "put",
          data: { count },
        });
        const updatedProducts = data?.data?.products || [];
        updatedProducts.forEach((updatedItem) => {
          const i = cartData.value.findIndex((p) => p._id === updatedItem._id);
          if (i !== -1) {
            cartData.value[i] = updatedItem;
          }
        });
        numOfCartItems.value = data?.numOfCartItems || 0;
        totalCartPrice.value = data?.data?.totalCartPrice || 0;
      } else {
        let cart = JSON.parse(localStorage.getItem("guestCart")) || [];
        cart = cart.map((p) =>
          p.id === item._id || p._id === item._id ? { ...p, count } : p,
        );
        localStorage.setItem("guestCart", JSON.stringify(cart));
        cartData.value = cart;
        numOfCartItems.value = cart.length;
        totalCartPrice.value = cart.reduce(
          (acc, p) => acc + p.count * p.price,
          0,
        );
      }
    } catch (err) {
      if (index !== -1) {
        cartData.value[index].count = item.count;
      }
    } finally {
      loadingAdd.value = null;
      loadingRemove.value = null;
    }
  }

  async function deleteItem(item) {
    loadingDelete.value = item._id;
    try {
      if (authStore.isLoggedUser) {
        const data = await fetchData({
          url: `/v2/cart/${item._id || item.product.id}`,
          method: "DELETE",
        });
        cartData.value = data?.data?.products ?? cartData.value;
        numOfCartItems.value = data?.numOfCartItems ?? numOfCartItems.value;
        totalCartPrice.value =
          data?.data?.totalCartPrice ?? totalCartPrice.value;
      } else {
        let cart = JSON.parse(localStorage.getItem("guestCart")) || [];
        cart = cart.filter((p) => (p.id || p._id) !== item._id);
        cartData.value = cart;
        numOfCartItems.value = cart.length;
        totalCartPrice.value = cart.reduce(
          (acc, p) => acc + p.count * p.price,
          0,
        );
        localStorage.setItem("guestCart", JSON.stringify(cart));
      }
    } catch (err) {
      cartData.value.splice(index, 0, removedItem);
      numOfCartItems.value = oldNumOfItems;
      totalCartPrice.value = oldTotalPrice;
    } finally {
      loadingDelete.value = null;
    }
  }

  async function addToCart(product) {
    if (!authStore.isLoggedUser) {
      const existingCart = JSON.parse(
        localStorage.getItem("guestCart") || "[]",
      );
      const alreadyExists = existingCart.some((p) => p.id === product.id);
      if (!alreadyExists) {
        existingCart.push(product);
        localStorage.setItem("guestCart", JSON.stringify(existingCart));
        cartData.value = existingCart;
        numOfCartItems.value = existingCart.length;
      }
      return { success: true, alreadyExists };
    }
    const alreadyExists = isProductInCart(product.id || product._id);
    if (!alreadyExists) {
      cartData.value.push({ product, count: 1, price: product.price });
      numOfCartItems.value++;
    }
    try {
      const res = await fetchData({
        url: "/v2/cart",
        method: "post",
        data: { productId: product.id || product._id },
      });
      cartData.value = res?.data?.products || cartData.value;
      numOfCartItems.value = res?.numOfCartItems || numOfCartItems.value;
      totalCartPrice.value = res?.data?.totalCartPrice || totalCartPrice.value;
      return { success: true };
    } catch (err) {
      cartData.value = cartData.value.filter(
        (item) =>
          (item?.product?.id || item?.product?._id) !==
          (product.id || product._id),
      );
      numOfCartItems.value--;
      return {
        success: false,
        message: err?.response?.data?.message || "Something went wrong",
      };
    }
  }

  async function clearCart() {
    if (authStore.isLoggedUser) {
      await fetchData({ url: "/v2/cart", method: "delete" });
    } else {
      localStorage.removeItem("guestCart");
    }
    resetCart();
  }

  watch(
    () => authStore.isLoggedUser,
    async (isLogged) => {
      if (isLogged) {
        resetCart();
        await mergeGuestCart();
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
    initCart,
    mergeGuestCart,
    loadGuestCart,
    resetCart,
    isProductInCart,
    updateCount,
    deleteItem,
    addToCart,
    clearCart,
    loadingDelete,
    loadingAdd,
    loadingRemove,
    loadingCart,
    mergingGuestCart,
  };
});
