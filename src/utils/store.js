import { configureStore } from "@reduxjs/toolkit";
import themeModeSlice from "./themeMode";

const store = configureStore({
  reducer: {
    themeMode: themeModeSlice,
  },
});

export default store;
