const AUTH_ROOT = "/auth";
const ADMIN_ROOT = "/admin";

export const ROUTES = {
  AUTH: {
    ROOT: AUTH_ROOT,
    SIGNIN: `${AUTH_ROOT}/sign-in`,
  },
  HOME: "/",
  ERROR404: "/404",
  ADMIN: {
    ROOT: ADMIN_ROOT
  },
};
