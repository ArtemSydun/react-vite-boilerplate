import React, { useEffect } from "react";
import { ROUTES } from "@/constants";
import {
  logout,
} from "@/services/store/reducers";

import { useAppDispatch, useAppSelector } from "@/services/store/store";

import { useNavigate } from "react-router-dom";
import { getAccessToken } from "@/helpers/auth";

interface AuthGuardProps {
  children: React.ReactElement;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const token = getAccessToken();
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // const { data: user, isLoading, isError } = useGetUserProfileQuery();

  useEffect(() => {
    if (!token) {
      dispatch(logout());
      navigate(ROUTES.AUTH.ROOT);
      return;
    }

    // if (!isLoading) {
    //   if (user) {
    //     if (!accessToken) {
    //       dispatch(setAccessToken({ accessToken: token }));
    //     }
    //     dispatch(setUser({ user }));
    //   } else if (isError) {
    //     dispatch(logout());
    //     navigate(ROUTES.AUTH.ROOT);
    //   }
    // }
  }, [token, accessToken, dispatch, navigate]);

  // useEffect(() => {
  //   dispatch(toggleLoader(isLoading));
  // }, [isLoading, dispatch]);

  // if (isLoading) return null;

  return <>{children}</>;
};
