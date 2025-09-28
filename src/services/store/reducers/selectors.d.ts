import { RootState } from "../store";
import { IAuthState } from "./authSlice";
export declare const authStateSelector: (state: RootState) => IAuthState;
export declare const selectAuthenticatedUserSelector: ((state: {
    auth: IAuthState;
    modal: import("./modalSlice").IModalState;
    loader: import("./loaderSlice").ILoaderState;
    baseApi: import("@reduxjs/toolkit/query").CombinedState<{}, "Users", "baseApi">;
}) => import("../../../types").IUserResponse | null) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: IAuthState) => import("../../../types").IUserResponse | null;
    memoizedResultFunc: ((resultFuncArgs_0: IAuthState) => import("../../../types").IUserResponse | null) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => import("../../../types").IUserResponse | null;
    dependencies: [(state: RootState) => IAuthState];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
export declare const selectJwtToken: ((state: {
    auth: IAuthState;
    modal: import("./modalSlice").IModalState;
    loader: import("./loaderSlice").ILoaderState;
    baseApi: import("@reduxjs/toolkit/query").CombinedState<{}, "Users", "baseApi">;
}) => string | null) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: IAuthState) => string | null;
    memoizedResultFunc: ((resultFuncArgs_0: IAuthState) => string | null) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => string | null;
    dependencies: [(state: RootState) => IAuthState];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
