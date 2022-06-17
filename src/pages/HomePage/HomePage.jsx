import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import logo from '../../assets/images/logo-white.svg';
import scheduleIcon from '../../assets/icons/nav-schedule-icon.svg';
import checklistIcon from '../../assets/icons/nav-checklist-icon.svg';
import usersIcon from '../../assets/icons/nav-users-icon.svg';
import classes from './homePage.module.css';
import Schedule from './Schedule/Schedule';

const HomePage = () => {
  return (
    <div className={classes.home}>
      <div className={classes.header}>
        <div className={classes.header__logoContainer}>
          <div className={classes.header__logo}>
            <img src={logo} alt="logo" />
            <h3>MedTech</h3>
          </div>
        </div>
        <nav className={classes.navContainer}>
          <div className={classes.nav}>
            <div className={classes.nav__options}>
              <div
                className={[classes.nav__option, classes.active_option].join(
                  ' '
                )}
              >
                <img
                  className={classes.nav_icon}
                  src={scheduleIcon}
                  alt="schedule"
                />
                Расписание
              </div>
              <div className={classes.nav__option}>
                <img
                  className={classes.nav_icon}
                  src={checklistIcon}
                  alt="checklist"
                />
                Чек лист
              </div>
              <div className={classes.nav__option}>
                <img
                  className={classes.nav_icon}
                  src={usersIcon}
                  alt="users icon"
                />
                Пользователи
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className={classes.content}>
        <Schedule />
      </div>
    </div>
  );
};

export default HomePage;
