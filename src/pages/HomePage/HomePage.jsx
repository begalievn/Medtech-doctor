import React, { useState } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import { navOptions } from "../../utils/consts/homeConsts";

import { logoWhite, doctorsAva } from "../../assets/images/images";
import { logoutIcon } from "../../assets/icons/icons";

import Schedule from "./components/Schedule/Schedule";
import NavOptionButton from "../../components/Home/header/nav-option-button/NavOptionButton";
import NavContainer from "../../components/Home/header/nav-container/NavContainer";
import Colleagues from "./components/Colleagues/Colleagues";
import Patients from "./components/Patients/Patients";
import classes from "./homePage.module.css";
import PatientPage from "./components/PatientPage/PatientPage";

const HomePage = () => {
  const location = useLocation();

  return (
    <div className={classes.home}>
      <div className={classes.header}>
        <NavContainer style={{ backgroundColor: "#BDF5D7" }}>
          <div className={classes.header__logo}>
            <img src={logoWhite} alt="logo" />
            <h3>MedTech</h3>
          </div>
        </NavContainer>
        <NavContainer style={{ backgroundColor: "#FFFFFF" }}>
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

              {/* Doctor */}
              <div className={classes.nav_user}>
                <div className={classes.user_div}>
                  <div className={classes.user_icon}>
                    <img src={doctorsAva} />
                  </div>
                  <p>{`Бегалиев Н.`}</p>
                </div>
                <div className={classes.nav_log}>
                  <p>Выйти</p>
                  <img src={logoutIcon} />
                </div>
              </div>
            </div>
          </nav>
        </NavContainer>
      </div>
      <div className={classes.content}>
        <Routes>
          <Route exact path="/" element={<Schedule />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/colleagues" element={<Colleagues />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/:patientId" element={<PatientPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
