import Swal from "sweetalert2";

// Delete Item
export async function confirmDelete({
  text = "Are you sure?",
  title = "Remove Item?",
  itemName = "",
  confirmText = "Delete",
  cancelText = "Cancel",
  fromText = "cart",
} = {}) {
  return await Swal.fire({
    html: `
            <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                    <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                </div>
                <h2 class="text-xl font-bold text-gray-800 mb-2">
                    ${title}
                </h2>
                <p class="text-gray-500">
                    ${text} ${itemName ? `<strong>${itemName}</strong> from your ${fromText}?` : ""}
                </p>
            </div>
        `,
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    focusConfirm: false,
    focusCancel: false,
    customClass: {
      popup: "rounded-2xl p-6",
      title: "text-xl font-bold",
      confirmButton:
        "cursor-pointer mr-2 bg-red-500 text-white shadow-lg shadow-red-500/20 px-5 py-2 rounded-lg transition-all duration-200 hover:bg-red-600",
      cancelButton:
        "cursor-pointer ms-1 bg-gray-100 text-gray-700 px-5 py-2 rounded-lg transition-all duration-200 hover:bg-gray-200",
    },
    buttonsStyling: false,
  });
}

// Success
export function showSuccess({
  title = "Done!",
  text = "",
  timer = 1500,
  showConfirmButton = false,
} = {}) {
  return Swal.fire({
    icon: "success",
    title,
    text,
    timer,
    showConfirmButton,
  });
}

// Clear Cart
export async function confirmClearCart() {
  return await Swal.fire({
    html: `
      <div class="text-center">
        
        <!-- ICON -->
        <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
          <svg class="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
        </div>

        <!-- TITLE -->
        <h2 class="text-xl font-bold text-gray-800 mb-2">
          Clear Your Cart?
        </h2>

        <!-- TEXT -->
        <p class="text-gray-500 text-sm">
          All items will be removed from your cart. This action cannot be undone.
        </p>

      </div>
    `,
    showCancelButton: true,
    confirmButtonText: "Yes, Clear All",
    cancelButtonText: "Keep Shopping",
    focusConfirm: false,
    focusCancel: false,
    customClass: {
      popup: "rounded-2xl p-6",
      confirmButton:
        "cursor-pointer mr-2 bg-red-500 text-white shadow-lg shadow-red-500/20 px-5 py-2 rounded-lg transition-all duration-200 hover:bg-red-600",
      cancelButton:
        "cursor-pointer ms-1 bg-gray-100 text-gray-700 px-5 py-2 rounded-lg transition-all duration-200 hover:bg-gray-200",
    },
    buttonsStyling: false,
  });
}
