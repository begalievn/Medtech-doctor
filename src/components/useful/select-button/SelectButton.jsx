import React from 'react';

import downArrow from '../../../assets/icons/down-arrow.svg';

import classes from './selectButton.module.css';

const SelectButton = ({ text }) => {
  return (
    <button className={classes.button}>
      <p>{text}</p>
      <img src={downArrow} alt="" />
    </button>
  );
};

export default SelectButton;
