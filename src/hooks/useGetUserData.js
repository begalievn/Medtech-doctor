// modules
import React from "react";

import { useSelector } from "react-redux";

// utils
import { getDataFromAccessToken } from "../utils/helpers/getDataFromAccessToken";

const useGetUserData = () => {
  let userData = useSelector((state) => state.auth.userData);

  try {
    userData = getDataFromAccessToken();
  } catch (err) {
    console.log(err);
  }

  return userData;
};

export default useGetUserData;
