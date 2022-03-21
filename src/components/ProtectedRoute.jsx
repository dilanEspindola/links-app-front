import { Navigate } from "react-router-dom";
import { useCookie } from "../hooks/useCookie";

export const ProtectedRoute = ({ children }) => {
  const { getCookie } = useCookie();

  if (!getCookie) return <Navigate to="/" />;

  return <div>{children}</div>;
};
