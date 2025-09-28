import { baseApi } from "@/services/api/baseApi";
import { authReducer } from "@/services/store/reducers/authSlice";
import { loaderReducer } from "@/services/store/reducers/loaderSlice";
import { modalReducer } from "@/services/store/reducers/modalSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  loader: loaderReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const middlewareList = [baseApi.middleware];

const uniqueMiddleware = Array.from(new Set(middlewareList));

export const createAppStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        uniqueMiddleware
      ),
  });

export const store = createAppStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
