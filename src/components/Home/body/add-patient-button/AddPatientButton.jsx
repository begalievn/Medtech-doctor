// modules
import React from 'react';

// styles
import classes from './addPatientButton.module.scss'

const AddPatientButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className={classes.button}>
      {text}
    </button>
  );
};

export default AddPatientButton;