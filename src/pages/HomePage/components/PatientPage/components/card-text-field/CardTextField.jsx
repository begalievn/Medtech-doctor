import React from "react";

import { cardIcon } from "../../../../../../assets/icons/icons";

import classes from "./cardTextField.module.scss";

const CardTextField = ({ text, onClick, active, date }) => {
  return (
    <div className={active ? [classes.container, classes.active].join(" ") : classes.container} onClick={onClick}>
      <img src={cardIcon} className={active ? classes.white_img : null} alt="icon" />
      <p className={active ? classes.active_p : null}><span>{text}</span> <span>{date}</span></p>
    </div>
  );
};

export default CardTextField;
