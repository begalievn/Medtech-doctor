import React from "react";

import { timeSchedulePlusIcon } from "../../../../../../assets/icons/icons";

import classes from "./timeSched.module.css";

const TimeScheduleButton = ({ text }) => {
  return (
    <button className={classes.button}>
      {/*<img src={timeSchedulePlusIcon} alt="" />*/}
      <p>{text}</p>
    </button>
  );
};

export default TimeScheduleButton;
