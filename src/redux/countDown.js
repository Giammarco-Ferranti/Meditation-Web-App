import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const countDownSlice = createSlice({
  name: "countDown",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment } = countDownSlice.actions;
export default countDownSlice.reducer;
