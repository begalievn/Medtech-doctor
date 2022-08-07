import React from 'react';

import classes from './activateSwitchButton.module.scss';
import {Switch} from "@mui/material";

const ActivateSwitchButton = () => {
  return (
    <div className={classes.container} >
      <p>Активировать</p>
      <Switch />
    </div>
  );
};

export default ActivateSwitchButton;