// modules
import React from "react";

import classes from "./timeSched.module.css";

const TimeScheduleButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={classes.button}>
      {/*<img src={timeSchedulePlusIcon} alt="" />*/}
      <p>{text}</p>
    </button>
  );
};

export default TimeScheduleButton;
