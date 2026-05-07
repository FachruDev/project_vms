import { configureStore } from "@reduxjs/toolkit";
import tenderReducer from "../features/vendor/tender/tenderSlice";

export const store = configureStore({
  reducer: {
    tender: tenderReducer,
  },
});