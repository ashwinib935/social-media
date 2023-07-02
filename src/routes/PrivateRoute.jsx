import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const token = localStorage.getItem("encodedToken");

  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
}

export default PrivateRoute;
