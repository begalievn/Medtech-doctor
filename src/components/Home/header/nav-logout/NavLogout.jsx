import React from "react";

import classes from "./navLogout.module.scss";
import { logoutIcon } from "../../../../assets/icons/icons";

const NavLogout = () => {
  return (
    <div className={classes.container}>
      <p>Выйти</p>
      <img src={logoutIcon} />
    </div>
  );
};

export default NavLogout;
