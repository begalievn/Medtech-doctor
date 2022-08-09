// modules
import React from "react";

// styles
import classes from "./medCardTextField.module.scss";

const MedCardTextField = ({ placeholder, label, ...props }) => {
  return (
    <div>
      <p className={classes.label}>{label}</p>
      <input className={classes.input} placeholder={placeholder} {...props} />
    </div>
  );
};

export default MedCardTextField;
