import React from 'react';

import plusIcon from '../.././../../../assets/icons/time-schedule-plus-icon.svg';

import classes from './timeSched.module.css';

const TimeScheduleButton = ({ text }) => {
  return (
    <button className={classes.button}>
      <img src={plusIcon} alt="" />
      <p>{text}</p>
    </button>
  );
};

export default TimeScheduleButton;
