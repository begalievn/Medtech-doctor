// modules
import React from "react";
import {Routes, Route} from "react-router-dom";

// components
import Schedule from "./components/Schedule/Schedule";
import NavOptionButton from "../../components/Home/header/nav-option-button/NavOptionButton";
import NavContainer from "../../components/Home/header/nav-container/NavContainer";
import Colleagues from "./components/Colleagues/Colleagues";
import Patients from "./components/Patients/Patients";
import PatientPage from "./components/PatientPage/PatientPage";
import DoctorsPage from "./components/DoctorsPage/DoctorsPage";
import DoctorsAvatar from "../../components/Home/header/doctors-avatar/DoctorsAvatar";
import NavLogout from "../../components/Home/header/nav-logout/NavLogout";
import ErrorPage from "../ErrorPage/ErrorPage";


// rtk-queries
import { useGetDoctorsQuery} from "../../store/features/doctors/doctorsQuery";

// assets
import { logoWhite, doctorsAva } from "../../assets/images/images";
import { logoutIcon } from "../../assets/icons/icons";

// constants
import { navOptions } from "../../utils/consts/homeConsts";

// styles
import classes from "./homePage.module.css";

const HomePage = () => {

  // const { data: doctors, isLoading: doctorsLoading } = useGetDoctorsQuery("");

  // console.log(doctors);


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
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
