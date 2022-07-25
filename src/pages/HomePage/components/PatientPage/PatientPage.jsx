import React from "react";

import classes from "./patientPage.module.scss";
import PatientPageAside from "./components/patient-page-aside/PatientPageAside";
import CheckList from "./components/check-list/CheckList";

const PatientPage = () => {
  return (
    <div className={classes.container}>
      <div>
        <PatientPageAside />
      </div>
      <div>
        <CheckList />
      </div>
    </div>
  );
};

export default PatientPage;
