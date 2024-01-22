import { configureStore } from "@reduxjs/toolkit";
import countDownSliceReducer from "./slicer/countDown.js";
import playerSliceReducer from "./slicer/songPlayer";

export const store = configureStore({
  reducer: {
    countDown: countDownSliceReducer,
    player: playerSliceReducer,
  },
});
