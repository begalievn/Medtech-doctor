import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import logo from '../../assets/images/logo-white.svg';

import { navOptions } from '../../utils/consts/homeConsts';

import Schedule from './components/Schedule/Schedule';
import NavOptionButton from '../../components/Home/header/nav-option-button/NavOptionButton';
import NavContainer from '../../components/Home/header/nav-container/NavContainer';
import CheckList from './components/CheckList/CheckList';
import Users from './components/Users/Users';
import classes from './homePage.module.css';

const HomePage = () => {
  return (
    <div className={classes.home}>
      <div className={classes.header}>
        <NavContainer style={{ backgroundColor: '#BDF5D7' }}>
          <div className={classes.header__logo}>
            <img src={logo} alt="logo" />
            <h3>MedTech</h3>
          </div>
        </NavContainer>
        <NavContainer style={{ backgroundColor: '#FFFFFF' }}>
          <nav className={classes.navContainer}>
            <div className={classes.nav}>
              <div className={classes.nav__options}>
                {navOptions.map((option, index) => (
                  <NavOptionButton
                    key={index}
                    path={option.path}
                    icon={option.icon}
                    text={option.text}
                  />
                ))}
              </div>
            </div>
          </nav>
        </NavContainer>
      </div>
      <div className={classes.content}>
        <Routes>
          <Route index path="/schedule" element={<Schedule />} />
          <Route path="/check-list" element={<CheckList />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
