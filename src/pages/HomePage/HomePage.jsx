import React from 'react';

import logo from '../../assets/images/logo-white.svg';
import classes from './homePage.module.css';

const HomePage = () => {
  return (
    <div className={classes.home}>
      <div className={classes.header}>
        <div className={classes.header__logoContainer}>
          <img src={logo} alt="logo" />
        </div>
        <nav className={classes.header__nav}></nav>
      </div>
    </div>
  );
};

export default HomePage;
