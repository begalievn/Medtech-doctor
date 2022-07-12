import React, { useState, useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import classes from './navOptionButton.module.css';

const NavOptionButton = ({ text, icon, path }) => {
  const [isActive, setActive] = useState(false);
  const location = useLocation();
  console.log();

  useEffect(() => {
    if (location.pathname === '/home/' + path) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home/' + path);
  };

  return (
    <div
      className={
        !isActive ? classes.option : [classes.option, classes.active].join(' ')
      }
      onClick={handleClick}
    >
      <img className={classes.icon} src={icon} alt="schedule" />
      {text}
    </div>
  );
};

export default NavOptionButton;
