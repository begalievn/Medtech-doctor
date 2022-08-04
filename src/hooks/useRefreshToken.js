import axios from "../api/axios";
import { REFRESH_URL } from "../utils/consts/apiConsts";
import { useDispatch, useSelector } from "react-redux";
import {
  setAccessToken,
  setRefreshToken,
  setUserData,
} from "../store/features/auth/authSlice";

const UseRefreshToken = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const refreshToken = useSelector((state) => state.auth.refreshToken);
  const dispatch = useDispatch();

  const refresh = async () => {
    const response = await axios.post(REFRESH_URL, {
      refreshToken: refreshToken,
    });
    console.log("REFRESH response", response?.data?.accessToken);
    dispatch(setAccessToken(response?.data?.accessToken));
    dispatch(setRefreshToken(response?.data?.refreshToken));
    dispatch(setUserData(response?.data));
    return response?.data?.accessToken;
  };

  return refresh;
};

export default UseRefreshToken;
