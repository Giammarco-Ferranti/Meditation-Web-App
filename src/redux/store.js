import { configureStore } from "@reduxjs/toolkit";
import { countDownSliceReducer } from "./countDown";

export const store = configureStore({
  reducer: {
    counter: countDownSliceReducer,
  },
});
