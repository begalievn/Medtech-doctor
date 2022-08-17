// modules
import { useSelector } from "react-redux";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const RequireAuth = ({ allowedRoles }) => {

  // tools
  const location = useLocation();

  let { role } = useSelector((state) => state.auth.userData);

  try {
    const accessToken = localStorage.getItem("accessToken") || "";
    const decoded = jwt_decode(accessToken);
    const decodedRole = decoded?.roles[0].split("_").slice(-1).join("");

    if(!role) {
      role = decodedRole;
    }
  } catch(err) {
    console.log(err);
  }

  console.log("RequireAuth auth: ", role);
  return (role) && allowedRoles.includes(role) ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
