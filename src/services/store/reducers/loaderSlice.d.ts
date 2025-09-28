import { PayloadAction } from "@reduxjs/toolkit";
export interface ILoaderState {
    showLoader: boolean;
}
export declare const loaderSlice: import("@reduxjs/toolkit").Slice<ILoaderState, {
    toggleLoader(state: import("immer").WritableDraft<ILoaderState>, action: PayloadAction<boolean>): void;
}, "loaderSlice", "loaderSlice", import("@reduxjs/toolkit").SliceSelectors<ILoaderState>>;
export declare const toggleLoader: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "loaderSlice/toggleLoader">;
export declare const loaderReducer: import("redux").Reducer<ILoaderState>;
