import React, { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import classes from "./navOptionButton.module.css";

const NavOptionButton = ({ text, icon, path }) => {
  const [isActive, setActive] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/home/" + path) {
      setActive(true);
    } else {
      setActive(false);
    }

    location.pathname === "/home/" || location.pathname === "/home"
      ? setIsHome(true)
      : setIsHome(false);
  }, [location, path]);

  const handleClick = () => {
    navigate("/home/" + path);
  };

  return (
    <div
      className={
        isHome
          ? [classes.option, classes.home].join(" ")
          : !isActive
          ? classes.option
          : [classes.option, classes.active].join(" ")
      }
      onClick={handleClick}
    >
      <img className={classes.icon} src={icon} alt="icon" />
      {text}
    </div>
  );
};

export default NavOptionButton;
