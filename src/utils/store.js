import { configureStore } from "@reduxjs/toolkit";
import themeModeSlice from "./themeMode";
import cartSlice from "./cart";
import wishSlice from "./wishList";
import searchSlice from "./search";
import sideCartVisibleSlice from "./sideCartVisible";

const store = configureStore({
  reducer: {
    themeMode: themeModeSlice,
    cart: cartSlice,
    wishList: wishSlice,
    search: searchSlice,
    sideCartVisible: sideCartVisibleSlice,
  },
});

export default store;
