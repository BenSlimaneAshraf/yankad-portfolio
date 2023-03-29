import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuIsOpen: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuIsOpen = !state.menuIsOpen;
    },
    closeMenu: (state) => {
      state.menuIsOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = settingsSlice.actions;

export default settingsSlice.reducer;
