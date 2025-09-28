export const AUTH_TOKEN_NAME = "accessToken";
export const AUTH_PROFILE_NAME = "user";

/**
 * Save access token to localStorage
 */
export const setAccessTokenToStorage = (token: string) => {
  localStorage.setItem(AUTH_TOKEN_NAME, token);
};

/**
 * Save user profile to localStorage
 */
export const setUserProfileToStorage = (user: unknown) => {
  localStorage.setItem(AUTH_PROFILE_NAME, JSON.stringify(user));
};

/**
 * Get access token from localStorage
 */
export const getAccessToken = () => {
  return localStorage.getItem(AUTH_TOKEN_NAME);
};

/**
 * Remove access token from localStorage
 */
export const removeAccessToken = () => {
  localStorage.removeItem(AUTH_TOKEN_NAME);
};

/**
 * Get user profile from localStorage
 */
export const getUserProfile = () => {
  const profileString = localStorage.getItem(AUTH_PROFILE_NAME);
  return profileString ? JSON.parse(profileString) : {};
};

/**
 * Remove user profile from localStorage
 */
export const removeUserProfile = () => {
  localStorage.removeItem(AUTH_PROFILE_NAME);
};

export const setAccessTokenToHeaders = (headers: Headers) => {
  const token = getAccessToken();
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  return headers;
};
