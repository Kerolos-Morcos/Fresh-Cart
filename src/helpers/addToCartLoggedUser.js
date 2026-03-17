async function addToCartLoggedUser(product, fetchData, data, showSuccess) {
  try {
    const res = await fetchData({
      url: "/v2/cart",
      method: "post",
      data: { productId: product.id },
    });

    if (res) {
      data.value = res.data;
      showSuccess();
      return { success: true, message: "Successfully added to cart!" };
    }
  } catch (err) {
    return {
      success: false,
      message: err?.response?.data?.message || "Something went wrong",
    };
  }
}

export default addToCartLoggedUser;
