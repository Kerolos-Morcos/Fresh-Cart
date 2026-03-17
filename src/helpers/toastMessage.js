import { toast } from "vue3-toastify";

function toastMessage(message, type = "success", options = {}) {
  toast(message, {
    type,
    autoClose: type === "error" ? 3000 : 2000,
    pauseOnHover: false,
    closeOnClick: true,
    ...options,
  });
}

export default toastMessage;
