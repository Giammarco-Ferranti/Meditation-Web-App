import { configureStore } from "@reduxjs/toolkit";
import countDownSliceReducer from "./slicer/countDown";

export const store = configureStore({
  reducer: {
    countDown: countDownSliceReducer,
  },
});
