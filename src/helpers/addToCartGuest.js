function addToCartGuest(product, showSuccess) {
  const existingCart = JSON.parse(localStorage.getItem("guestCart") || "[]");
  const alreadyExists = existingCart.some((p) => p.id === product.id);
  if (!alreadyExists) {
    existingCart.push(product);
    localStorage.setItem("guestCart", JSON.stringify(existingCart));
  }
  showSuccess();
  return {
    success: true,
    message: alreadyExists ? "Already in cart!" : "Successfully added to cart!",
    cartData: existingCart,
  };
}

export default addToCartGuest;
