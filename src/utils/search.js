import { createSlice } from "@reduxjs/toolkit";

const seachSlice = createSlice({
  name: "searchSlice",
  initialState: { value: false },
  reducers: {
    remove: (state) => {
      state.value = false;
    },
    show: (state) => {
      state.value = true;
    },
  },
});

export const { show, remove } = seachSlice.actions;

export default seachSlice.reducer;
