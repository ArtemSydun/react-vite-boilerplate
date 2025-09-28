import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ILoaderState {
  showLoader: boolean;
}

const initialState: ILoaderState = {
  showLoader: false,
};

export const loaderSlice = createSlice({
  name: "loaderSlice",
  initialState,
  reducers: {
    toggleLoader(state, action: PayloadAction<boolean>) {
      state.showLoader = action.payload;
    },
  },
});

export const { toggleLoader } = loaderSlice.actions;

export const loaderReducer = loaderSlice.reducer;
