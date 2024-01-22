import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
  isActive: false,
};

export const playerSlice = createSlice({
  name: "songPlayer",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    active: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { setValue, active } = playerSlice.actions;
export default playerSlice.reducer;
