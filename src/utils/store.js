import { configureStore } from "@reduxjs/toolkit";
import themeMode from "./themeMode";

export const store = configureStore({
  reducer: {
    toggle: themeMode,
  },
});
