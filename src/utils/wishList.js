import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wish",
  initialState: {
    items: [],
  },
  reducers: {
    addToWish: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromWish: (state, action) => {
      state.items.splice(state.items.indexOf(action.payload), 1);
    },
  },
});

export const { addToWish, removeFromWish } = wishSlice.actions;

export default wishSlice.reducer;
