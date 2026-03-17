import { ref } from "vue";

export function useSuccessIcon() {
  const success = ref(false);

  function showSuccess() {
    success.value = true;
    setTimeout(() => {
      success.value = false;
    }, 3000);
  }

  return { success, showSuccess };
}
