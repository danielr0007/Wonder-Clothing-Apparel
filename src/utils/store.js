import { configureStore } from "@reduxjs/toolkit";
import themeModeSlice from "./themeMode";
import cartSlice from "./cart";
import wishSlice from "./wishList";

const store = configureStore({
  reducer: {
    themeMode: themeModeSlice,
    cart: cartSlice,
    wishList: wishSlice,
  },
});

export default store;
