import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  isActive: false,
  modalOpen: false,
};

export const countDownSlice = createSlice({
  name: "countDown",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = action.payload;
    },
    decrement: (state) => {
      state.value -= 1000;
    },
    active: (state, action) => {
      state.isActive = action.payload;
    },
    openModal: (state, action) => {
      state.modalOpen = action.payload;
    },
  },
});

export const { increment, decrement, active, openModal } =
  countDownSlice.actions;
export default countDownSlice.reducer;
