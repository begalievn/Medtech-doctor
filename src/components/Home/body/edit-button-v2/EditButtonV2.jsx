import React from 'react';

import classes from './editButtonV2.module.scss'

const EditButtonV2 = ({text, handleClick}) => {
  return (
    <button className={classes.button} onClick={handleClick}>
      <span>{text}</span>
    </button>
  );
};

export default EditButtonV2;