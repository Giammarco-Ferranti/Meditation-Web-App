import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const blogSlice = createSlice({
  name: "blogPosts",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = blogSlice.actions;
export default blogSlice.reducer;
