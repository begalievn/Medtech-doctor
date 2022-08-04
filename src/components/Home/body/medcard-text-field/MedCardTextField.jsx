import React from "react";

import classes from "./medCardTextField.module.scss";

const MedCardTextField = ({ placeholder, ...props }) => {
  return (
    <div>
      <input {...props} className={classes.input} placeholder={placeholder} />
    </div>
  );
};

export default MedCardTextField;
