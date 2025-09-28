import { ISignInRequest, ISignInResponse } from '@/types';
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation<ISignInResponse, ISignInRequest>({
      query: (credentials) => ({
        url: `/auth/login/`,
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Users"],
    }),

    logoutPOST: build.mutation<void, void>({
      query: () => ({
        url: `/auth/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useLogoutPOSTMutation,
} = authApi;
