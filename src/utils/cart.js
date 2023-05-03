import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const itemindex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemindex >= 0) {
        state.items[itemindex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.items.push(tempProduct);
      }
    },
    decreaseCart: (state, action) => {
      const itemindex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.items[itemindex].cartQuantity > 1) {
        state.items[itemindex].cartQuantity -= 1;
      } else {
        const nextCartItems = state.items.filter((cartItem) => {
          return cartItem.id !== action.payload.id;
        });
        state.items = nextCartItems;
      }
    },
    removeAllItem: (state, action) => {
      const nextCartItems = state.items.filter((cartItem) => {
        return cartItem.id !== action.payload.id;
      });

      state.items = nextCartItems;
    },
    getTotals: (state, action) => {
      let { total, quantity } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        { total: 0, quantity: 0 }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addItem, removeAllItem, decreaseCart, getTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
