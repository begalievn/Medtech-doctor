import { useSelector } from "react-redux";
import { useLocation, Outlet, Navigate } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  const { role } = useSelector((state) => state.auth.userData);
  const location = useLocation();

  console.log("RequireAuth auth: ", role);
  return role && allowedRoles.includes(role) ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
