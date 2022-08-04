import React from "react";

import classes from "./patientPage.module.scss";
import PatientPageAside from "./components/patient-page-aside/PatientPageAside";
import CheckList from "./components/check-list/CheckList";
import MedCard from "./components/medcard/MedCard";
import { Routes, Route } from "react-router-dom";

const PatientPage = () => {
  return (
    <div className={classes.container}>
      <div>
        <PatientPageAside />
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<MedCard />} />
          <Route path="/check-list" element={<CheckList />} />
          <Route path="/med-card" element={<MedCard />} />
        </Routes>
      </div>
    </div>
  );
};

export default PatientPage;
