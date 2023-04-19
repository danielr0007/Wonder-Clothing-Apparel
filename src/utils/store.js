import { configureStore } from "@reduxjs/toolkit";
import themeModeSlice from "./themeMode";
import cartSlice from "./cart";
import wishSlice from "./wishList";
import searchSlice from "./search";

const store = configureStore({
  reducer: {
    themeMode: themeModeSlice,
    cart: cartSlice,
    wishList: wishSlice,
    search: searchSlice,
  },
});

export default store;
