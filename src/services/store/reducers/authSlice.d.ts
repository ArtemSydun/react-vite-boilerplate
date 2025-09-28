import { IUserResponse } from "@/types";
import { PayloadAction } from "@reduxjs/toolkit";
export interface IAuthState {
    accessToken: string | null;
    user: IUserResponse | null;
}
export declare const authSlice: import("@reduxjs/toolkit").Slice<IAuthState, {
    setAccessToken(state: import("immer").WritableDraft<IAuthState>, action: PayloadAction<{
        accessToken: string | null;
    }>): void;
    setUser(state: import("immer").WritableDraft<IAuthState>, action: PayloadAction<{
        user: IUserResponse;
    }>): void;
    logout(state: import("immer").WritableDraft<IAuthState>): void;
}, "authSlice", "authSlice", import("@reduxjs/toolkit").SliceSelectors<IAuthState>>;
export declare const setAccessToken: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    accessToken: string | null;
}, "authSlice/setAccessToken">, setUser: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    user: IUserResponse;
}, "authSlice/setUser">, logout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"authSlice/logout">;
export declare const authReducer: import("redux").Reducer<IAuthState>;
