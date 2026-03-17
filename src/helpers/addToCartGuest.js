function addToCartGuest(product, showSuccess) {
  const existingCart = localStorage.getItem("guestCart");

  if (existingCart) {
    const cartItems = [...JSON.parse(existingCart), product];
    localStorage.setItem("guestCart", JSON.stringify(cartItems));
  } else {
    localStorage.setItem("guestCart", JSON.stringify([product]));
  }
  showSuccess();
  return {
    success: true,
    message: "Successfully added to cart!",
  };
}

export default addToCartGuest;
