import { ref } from "vue";
import { useRouter } from "vue-router";

export function useSearch() {
  const router = useRouter();
  const searchValue = ref("");

  function submitSearch() {
    const keyword = searchValue.value.trim();

    if (!keyword) return;

    router.push({
      path: "/search",
      query: {
        q: keyword,
        page: 1,
      },
    });

    searchValue.value = "";
  }

  return {
    searchValue,
    submitSearch,
  };
}
