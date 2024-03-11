import React from "react";
import { Navigate } from "react-router-dom";
import auth from "./@core/auth/auth";

const ProtectedRoute: React.FC<React.PropsWithChildren | any> = ({
  children,
}) => {
  if (!auth.isSignedIn()) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};

export default ProtectedRoute;
