import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./item/itemSlice";

export const store = configureStore({
  reducer: {
    item: itemSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
