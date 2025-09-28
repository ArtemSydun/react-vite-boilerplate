import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithLogout } from "./api.config";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithLogout,
  tagTypes: ["Users"],
  endpoints: () => ({}),
});
