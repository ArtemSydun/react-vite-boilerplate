export declare const AUTH_TOKEN_NAME = "accessToken";
export declare const AUTH_PROFILE_NAME = "user";
/**
 * Save access token to localStorage
 */
export declare const setAccessTokenToStorage: (token: string) => void;
/**
 * Save user profile to localStorage
 */
export declare const setUserProfileToStorage: (user: unknown) => void;
/**
 * Get access token from localStorage
 */
export declare const getAccessToken: () => string | null;
/**
 * Remove access token from localStorage
 */
export declare const removeAccessToken: () => void;
/**
 * Get user profile from localStorage
 */
export declare const getUserProfile: () => any;
/**
 * Remove user profile from localStorage
 */
export declare const removeUserProfile: () => void;
export declare const setAccessTokenToHeaders: (headers: Headers) => Headers;
