import React from "react";

import { cardIcon } from "../../../../../../assets/icons/icons";

import classes from "./cardTextField.module.scss";

const CardTextField = ({ text }) => {
  return (
    <div className={classes.container}>
      <img src={cardIcon} alt="icon" />
      <p>{text}</p>
    </div>
  );
};

export default CardTextField;
