import apiClient from "@/api/axiosInterceptor";
import { ref } from "vue";

export function useAPI() {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(false);

  async function fetchData(config = {}) {
    isLoading.value = true;
    error.value = null;
    try {
      const res = await apiClient(config);
      data.value = res.data;
      return res.data;
    } catch (err) {
      error.value = {
        msg: err.response?.data?.message || err.message,
        errors: err.response?.data?.errors,
        status: err.response?.status,
      };
      return null;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    data,
    error,
    isLoading,
    fetchData,
  };
}
