export const createCartSlice = (set, get) => ({
  cartItems: [],
  cartItemCount: 0,
  addItemToCart: (item) => {
    const existingItem = get().cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    let newCartItems;
    if (existingItem) {
      newCartItems = get().cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, units: cartItem.units + 1 }
          : cartItem
      );
    } else {
      newCartItems = [...get().cartItems, { ...item, units: 1 }];
    }
    set({
      cartItems: newCartItems,
      cartItemCount: newCartItems.reduce((sum, item) => sum + item.units, 0),
    });

    const addToast = get().addToast;
    addToast(`"${item.name}" added to cart`);
  },
  removeItemFromCart: (id) => {
    const newCartItems = get().cartItems.filter(
      (cartItem) => cartItem.id !== id
    );
    set({
      cartItems: newCartItems,
      cartItemCount: newCartItems.reduce((sum, item) => sum + item.units, 0),
    });
  },
  clearCart: () => {
    set({ cartItems: [], cartItemCount: 0 });
  },
});
