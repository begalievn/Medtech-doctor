// modules
import React from 'react';

// styles
import classes from './textFieldV2.module.scss'

const TextFieldV2 = ({label, text}) => {
  return (
    <div className={classes.container} >
      <p className={classes.label}>{label}</p>
      <div className={classes.text_field}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextFieldV2;