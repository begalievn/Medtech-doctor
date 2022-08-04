import React from "react";

import classes from "./checkListInputField.module.scss";

const CheckListInputField = ({ placeholder }) => {
  return <input className={classes.input_field} placeholder={placeholder} />;
};

export default CheckListInputField;
