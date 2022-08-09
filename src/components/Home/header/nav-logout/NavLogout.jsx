// modules
import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

// redux-actions
import { clearUserData} from "../../../../store/features/auth/authSlice";

// assets
import { logoutIcon } from "../../../../assets/icons/icons";

// styles
import classes from "./navLogout.module.scss";

const NavLogout = () => {

  // tools
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/", { replace: true});
    dispatch(clearUserData())
  }

  return (
    <div onClick={handleLogout} className={classes.container}>
      <p>Выйти</p>
      <img src={logoutIcon} alt="logout" />
    </div>
  );
};

export default NavLogout;
