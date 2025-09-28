import {
  getAccessToken,
  getUserProfile,
  removeAccessToken,
  removeUserProfile,
  setAccessTokenToStorage,
  setUserProfileToStorage,
} from "@/helpers";
import { IUserResponse } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  accessToken: string | null;
  user: IUserResponse | null;
}

const initialState: IAuthState = {
  accessToken: getAccessToken() ?? null,
  user: getUserProfile() ?? null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAccessToken(
      state,
      action: PayloadAction<{
        accessToken: string | null;
      }>
    ) {
      setAccessTokenToStorage(action?.payload?.accessToken as string);
      state.accessToken = action.payload.accessToken;
    },
    setUser(
      state,
      action: PayloadAction<{
        user: IUserResponse;
      }>
    ) {
      setUserProfileToStorage(action.payload.user);
      state.user = action.payload.user;
    },
 
    logout(state) {
      state.accessToken = null;
      state.user = null;
      removeAccessToken();
      removeUserProfile();
    },
  },
});

export const { setAccessToken, setUser, logout } =
  authSlice.actions;

export const authReducer = authSlice.reducer;
