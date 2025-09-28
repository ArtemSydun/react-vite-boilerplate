import { TypedUseSelectorHook } from "react-redux";
export declare const rootReducer: import("redux").Reducer<{
    auth: import("@/services/store/reducers/authSlice").IAuthState;
    modal: import("@/services/store/reducers/modalSlice").IModalState;
    loader: import("@/services/store/reducers/loaderSlice").ILoaderState;
    baseApi: import("@reduxjs/toolkit/query").CombinedState<{}, "Users", "baseApi">;
}, import("redux").UnknownAction, Partial<{
    auth: import("@/services/store/reducers/authSlice").IAuthState | undefined;
    modal: import("@/services/store/reducers/modalSlice").IModalState | undefined;
    loader: import("@/services/store/reducers/loaderSlice").ILoaderState | undefined;
    baseApi: import("@reduxjs/toolkit/query").CombinedState<{}, "Users", "baseApi"> | undefined;
}>>;
export declare const createAppStore: () => import("@reduxjs/toolkit").EnhancedStore<{
    auth: import("@/services/store/reducers/authSlice").IAuthState;
    modal: import("@/services/store/reducers/modalSlice").IModalState;
    loader: import("@/services/store/reducers/loaderSlice").ILoaderState;
    baseApi: import("@reduxjs/toolkit/query").CombinedState<{}, "Users", "baseApi">;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        auth: import("@/services/store/reducers/authSlice").IAuthState;
        modal: import("@/services/store/reducers/modalSlice").IModalState;
        loader: import("@/services/store/reducers/loaderSlice").ILoaderState;
        baseApi: import("@reduxjs/toolkit/query").CombinedState<{}, "Users", "baseApi">;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    auth: import("@/services/store/reducers/authSlice").IAuthState;
    modal: import("@/services/store/reducers/modalSlice").IModalState;
    loader: import("@/services/store/reducers/loaderSlice").ILoaderState;
    baseApi: import("@reduxjs/toolkit/query").CombinedState<{}, "Users", "baseApi">;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        auth: import("@/services/store/reducers/authSlice").IAuthState;
        modal: import("@/services/store/reducers/modalSlice").IModalState;
        loader: import("@/services/store/reducers/loaderSlice").ILoaderState;
        baseApi: import("@reduxjs/toolkit/query").CombinedState<{}, "Users", "baseApi">;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<{
    auth: import("@/services/store/reducers/authSlice").IAuthState;
    modal: import("@/services/store/reducers/modalSlice").IModalState;
    loader: import("@/services/store/reducers/loaderSlice").ILoaderState;
    baseApi: import("@reduxjs/toolkit/query").CombinedState<{}, "Users", "baseApi">;
}, undefined, import("redux").UnknownAction> & import("redux").Dispatch<import("redux").UnknownAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
