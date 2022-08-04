import React, { useState, useEffect } from "react";

import {Routes, Route, useLocation, useNavigate} from "react-router-dom";

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
import DoctorsPage from "./components/DoctorsPage/DoctorsPage";
import DoctorsAvatar from "../../components/Home/header/doctors-avatar/DoctorsAvatar";
import NavLogout from "../../components/Home/header/nav-logout/NavLogout";
import { useSelector } from "react-redux";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const HomePage = () => {
  const location = useLocation();
  const userData = useSelector((state) => state.auth.userData);
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate();

  // console.log("userData", userData);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get('/user', {
          signal: controller.signal
        });
        console.log(response);
        console.log("Some request sent");
      }catch (err) {
        console.log(err);
        navigate('/', {state: {from: location}, replace: true})
      }
    }

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    }
  }, [])

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
                <DoctorsAvatar />
                <div className={classes.nav_log}>
                  <NavLogout />
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
          <Route path="/profile" element={<DoctorsPage />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/:patientId/*" element={<PatientPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
