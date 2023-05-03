import { createSlice } from "@reduxjs/toolkit";

const sideCartVisibleSlice = createSlice({
  name: "sideCartVisible",
  initialState: { value: false },
  reducers: {
    toggleSideCart: (state) => {
      !state.value ? (state.value = true) : (state.value = false);
    },
  },
});

export const { toggleSideCart } = sideCartVisibleSlice.actions;

export default sideCartVisibleSlice.reducer;
