import React from "react";

import { Navigate, useRoutes } from "react-router-dom";
import { ROUTES } from "@/constants";
import { MainLayout } from "@/layouts/MainLayout";
import { HomePage, NotFoundPage, SignInPage } from "@/pages";
import { AuthGuard, GuestGuard } from "@/guards";
import { AuthLayout } from '@/layouts/AuthLayout';

export const AppRouter: React.FC = (): React.ReactElement | null => {
  const routes = [
    {
      path: ROUTES.AUTH.ROOT,
      element: (
        <GuestGuard>
          <AuthLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: `${ROUTES.AUTH.ROOT}`,
          element: <Navigate to={ROUTES.AUTH.SIGNIN} replace />,
        },
        {
          path: ROUTES.AUTH.SIGNIN,
          element: <SignInPage />,
        },
      ],
    },

    {
      path: ROUTES.HOME,
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: ROUTES.HOME,
          element: <HomePage />,
        },
      ],
    },
    { path: ROUTES.ERROR404, element: <NotFoundPage /> },
    {
      path: "*",
      element: <Navigate to={ROUTES.ERROR404} replace />,
    },
  ];

  return useRoutes(routes);
};
