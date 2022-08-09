// modules
import React from 'react';

// styles
import classes from './addPatientButton.module.scss'

const AddPatientButton = ({text}) => {
  return (
    <button className={classes.button}>
      {text}
    </button>
  );
};

export default AddPatientButton;