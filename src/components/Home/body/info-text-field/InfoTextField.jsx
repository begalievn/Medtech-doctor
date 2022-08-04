import React from "react";

import classes from "./infoTextField.module.scss";

const InfoTextField = ({ label, text, style }) => {
  return (
    <div className={classes.container} style={{ ...style }}>
      <p>{label}</p>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InfoTextField;
