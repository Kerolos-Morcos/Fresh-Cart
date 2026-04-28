import { useAPI } from "@/composables/useAPI";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAddressStore = defineStore("addressStore", () => {
  const addresses = ref([]);
  const isLoading = ref(false);
  const { fetchData } = useAPI();

  async function getAddresses() {
    isLoading.value = true;
    const res = await fetchData({ url: "/v1/addresses", method: "get" });
    addresses.value = res?.data || [];
    isLoading.value = false;
  }

  async function addAddress(values) {
    const res = await fetchData({
      url: "/v1/addresses",
      method: "post",
      data: values,
    });
    const newItem = res?.data?.find(
      (a) => !addresses.value.some((old) => old._id === a._id),
    );
    if (newItem) addresses.value.push(newItem);
  }

  async function editAddress(id, values) {
    await fetchData({ url: `/v1/addresses/${id}`, method: "delete" });
    const res = await fetchData({
      url: "/v1/addresses",
      method: "post",
      data: values,
    });
    const idx = addresses.value.findIndex((a) => a._id === id);
    const newItem = res?.data?.find(
      (a) => !addresses.value.some((old) => old._id === a._id),
    );
    if (idx !== -1 && newItem) addresses.value.splice(idx, 1, newItem);
  }

  async function deleteAddress(id) {
    await fetchData({ url: `/v1/addresses/${id}`, method: "delete" });
    addresses.value = addresses.value.filter((a) => a._id !== id);
  }

  return {
    addresses,
    isLoading,
    getAddresses,
    addAddress,
    editAddress,
    deleteAddress,
  };
});
