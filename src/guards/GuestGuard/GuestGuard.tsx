import React, { useEffect } from "react";
import { ROUTES } from "@/constants";
import { useAppSelector } from "@/services/store/store";

import { useNavigate } from "react-router-dom";

interface GuestGuardProps {
  children: React.ReactElement;
}

export const GuestGuard: React.FC<GuestGuardProps> = ({ children }) => {
  const navigate = useNavigate();
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (accessToken && user) {
      navigate(ROUTES.HOME);
    }
  }, [accessToken, user, navigate]);

  return children;
};
