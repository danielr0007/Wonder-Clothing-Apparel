import { createSlice } from "@reduxjs/toolkit";

const sideCartVisibleSlice = createSlice({
  name: "sideCartVisible",
  initialState: { value: false },
  reducers: {
    toggle: (state) => {
      !state.value ? (state.value = true) : (state.value = false);
    },
  },
});

export const { toggle } = sideCartVisibleSlice.actions;

export default sideCartVisibleSlice.reducer;
