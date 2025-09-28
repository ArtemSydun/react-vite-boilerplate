import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { IAuthState } from "./authSlice";

export const authStateSelector = (state: RootState) => state.auth;

export const selectAuthenticatedUserSelector = createSelector(
  authStateSelector,
  (state: IAuthState) => state.user
);
export const selectJwtToken = createSelector(
  authStateSelector,
  (state: IAuthState) => state.accessToken
);

