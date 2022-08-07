import React, {useEffect} from "react";

import classes from "./doctorsPage.module.scss";
import DoctorsPageAside from "./components/doctors-page-aside/DoctorsPageAside";
import DoctorPageContent from "./components/doctor-page-content/DoctorPageContent";
import {axiosPrivate} from "../../../../api/axios";
import {useLocation, useNavigate} from "react-router-dom";

const DoctorsPage = () => {

  return (
    <div className={classes.container}>
      <div>
        <DoctorsPageAside />
      </div>
      <div>
        <DoctorPageContent />
      </div>
    </div>
  );
};

export default DoctorsPage;
