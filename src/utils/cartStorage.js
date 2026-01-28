export const getCartKey = (user) => {
  return user ? `user_cart_${user.username}` : "guest_cart";
};

export const getCart = (user) => {
  const key = getCartKey(user);
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const saveCart = (user, cart) => {
  const key = getCartKey(user);
  localStorage.setItem(key, JSON.stringify(cart));
};

export const clearCart = (user) => {
  const key = getCartKey(user);
  localStorage.removeItem(key);
};
