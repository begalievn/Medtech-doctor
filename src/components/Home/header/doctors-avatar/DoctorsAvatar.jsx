import React from "react";
import classes from "./doctorsAvatar.module.scss";
import { doctorsAva } from "../../../../assets/images/images";
import { useNavigate } from "react-router-dom";

const DoctorsAvatar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Avatar has been clicked");
    navigate("profile");
  };

  return (
    <div className={classes.container} onClick={handleClick}>
      <div className={classes.user_icon}>
        <img src={doctorsAva} />
      </div>
      <p>{`Бегалиев Н.`}</p>
    </div>
  );
};

export default DoctorsAvatar;
