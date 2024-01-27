import { configureStore } from "@reduxjs/toolkit";
import countDownSliceReducer from "./slicer/countDown.js";
import playerSliceReducer from "./slicer/songPlayer";
import blogSliceReducers from "./slicer/blogPost.js";

export const store = configureStore({
  reducer: {
    countDown: countDownSliceReducer,
    player: playerSliceReducer,
    blog: blogSliceReducers,
  },
});
