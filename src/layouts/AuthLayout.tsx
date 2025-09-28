import React from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: React.FC = () => {
  return (
    <div className="flex w-screen h-screen">
      <div
        className="flex-1"
        style={{ backgroundColor: "#FFFFFF" }}
      />

      <div className="flex-1 flex justify-center items-center relative">
        <Outlet />
      </div>
    </div>
  );
};
