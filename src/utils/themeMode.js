import { createSlice } from "@reduxjs/toolkit";

const themeModeSlice = createSlice({
  name: "themeMode",
  initialState: { value: false },
  reducers: {
    toggle: (state) => {
      !state.value ? (state.value = true) : (state.value = false);
    },
  },
});

export const { toggle } = themeModeSlice.actions;

export default themeModeSlice.reducer;
