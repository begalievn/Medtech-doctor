import jwt_decode from "jwt-decode";

export const getRoleFromAccessToken = () => {
  const accessToken = localStorage.getItem("accessToken") || "";
  const decoded = jwt_decode(accessToken);
  const decodedRole = decoded?.roles[0].split("_").slice(-1).join("");

  return decodedRole;
}