import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useAPI } from "@/composables/useAPI";
import { useAuthStore } from "./authStore";
import { watch } from "vue";

export const useWishlistStore = defineStore("wishlistStore", () => {
  const wishlistData = ref([]);
  const wishlistCount = ref(0);
  const isLoading = ref(false);
  const mergingGuestWishlist = ref(false);

  const { fetchData } = useAPI();
  const authStore = useAuthStore();

  const wishlistIds = computed(() =>
    wishlistData.value.map((p) => p.id || p._id),
  );

  function isInWishlist(productId) {
    return wishlistIds.value.includes(productId);
  }

  async function getWishlist() {
    isLoading.value = true;
    if (!authStore.isLoggedUser) {
      const saved = JSON.parse(localStorage.getItem("guestWishlist") || "[]");
      wishlistData.value = saved;
      wishlistCount.value = saved.length;
      isLoading.value = false;
      return;
    }
    const data = await fetchData({ url: "/v1/wishlist", method: "get" });
    wishlistData.value = data?.data || [];
    wishlistCount.value = data?.count || 0;
    isLoading.value = false;
  }

  async function addToWishlist(product) {
    if (!authStore.isLoggedUser) {
      const saved = JSON.parse(localStorage.getItem("guestWishlist") || "[]");
      const exists = saved.some(
        (p) => (p.id || p._id) === (product.id || product._id),
      );
      if (!exists) {
        saved.push(product);
        localStorage.setItem("guestWishlist", JSON.stringify(saved));
        wishlistData.value = saved;
        wishlistCount.value = saved.length;
      }
      return;
    }
    wishlistData.value.push(product);
    wishlistCount.value++;
    try {
      await fetchData({
        url: "/v1/wishlist",
        method: "post",
        data: { productId: product.id || product._id },
      });
    } catch {
      wishlistData.value = wishlistData.value.filter(
        (p) => (p.id || p._id) !== (product.id || product._id),
      );
      wishlistCount.value--;
    }
  }

  async function removeFromWishlist(productId) {
    if (!authStore.isLoggedUser) {
      let saved = JSON.parse(localStorage.getItem("guestWishlist") || "[]");
      saved = saved.filter((p) => (p.id || p._id) !== productId);
      localStorage.setItem("guestWishlist", JSON.stringify(saved));
      wishlistData.value = saved;
      wishlistCount.value = saved.length;
      return;
    }
    const removed = wishlistData.value.find(
      (p) => (p.id || p._id) === productId,
    );
    wishlistData.value = wishlistData.value.filter(
      (p) => (p.id || p._id) !== productId,
    );
    wishlistCount.value--;
    try {
      await fetchData({ url: `/v1/wishlist/${productId}`, method: "delete" });
    } catch {
      if (removed) wishlistData.value.push(removed);
      wishlistCount.value++;
    }
  }

  async function mergeGuestWishlist() {
    const guestWishlist = JSON.parse(
      localStorage.getItem("guestWishlist") || "[]",
    );
    if (guestWishlist.length === 0) {
      await getWishlist();
      return;
    }
    mergingGuestWishlist.value = true;
    for (const product of guestWishlist) {
      await fetchData({
        url: "/v1/wishlist",
        method: "post",
        data: { productId: product.id || product._id },
      });
    }
    localStorage.removeItem("guestWishlist");
    await getWishlist();
    mergingGuestWishlist.value = false;
  }

  async function toggleWishlist(productId) {
    if (isInWishlist(productId)) {
      await removeFromWishlist(productId);
    } else {
      await addToWishlist(productId);
    }
  }

  function resetWishlist() {
    wishlistData.value = [];
    wishlistCount.value = 0;
  }

  watch(
    () => authStore.isLoggedUser,
    async (isLogged) => {
      if (isLogged) {
        resetWishlist();
        await mergeGuestWishlist();
      } else {
        resetWishlist();
        getWishlist();
      }
    },
  );

  return {
    wishlistData,
    wishlistCount,
    wishlistIds,
    isInWishlist,
    getWishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    resetWishlist,
    isLoading,
    mergingGuestWishlist,
  };
});
