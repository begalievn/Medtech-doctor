// modules
import React from 'react';

// styles
import classes from "../medcard-text-field/medCardTextField.module.scss";

const TextFieldSearch = ({ placeholder, label, ...props }) => {
  return (
    <div>
      <p className={classes.label}>{label}</p>
      <select   >
        <option value={""}></option>
        <option ></option>
        <option></option>
      </select>
    </div>
  );
};

export default TextFieldSearch;