import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [],
    singleItem: null,
    description: null,
    loading: false,
  },
  reducers: {
    onLoading: (state) => {
      state.loading = true;
    },
    onLoadItems: (state, { payload }) => {
      state.items = payload;
      state.loading = false;
    },
    onLoadItem: (state, { payload }) => {
      state.singleItem = payload;
      state.loading = false;
    },
    onLoadDescription: (state, { payload }) => {
      state.description = payload;
      state.loading = false;
    },
  },
});

export const { onLoading, onLoadItems, onLoadItem, onLoadDescription } =
  itemSlice.actions;
