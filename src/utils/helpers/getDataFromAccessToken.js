import jwt_decode from "jwt-decode";

export const getDataFromAccessToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  const decoded = jwt_decode(accessToken);
  return decoded;
}