// modules
import React from 'react';
import {useSelector} from "react-redux";
import {getRoleFromAccessToken} from "../utils/helpers/getRoleFromAccessToken";
import {getDataFromAccessToken} from "../utils/helpers/getDataFromAccessToken";

const UseGetUserRole = () => {
  let role = useSelector((state) => state.auth.userData.role);


  try {
    if(!role) {
      role = getRoleFromAccessToken();
    }
  }catch (err) {
    console.log(err);
  }

  return role;
};

export default UseGetUserRole;