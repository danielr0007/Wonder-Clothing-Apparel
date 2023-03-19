import { createSlice } from "@reduxjs/toolkit";

export const themeModeSlice = createSlice({
  name: "theme-mode",
  initialState: false,
  reducers: {
    toggle: (state) => {
      !state ? (state = state) : (state = !state);
    },
  },
});

export const { toggle } = themeModeSlice.actions;

export default themeModeSlice.reducer;
