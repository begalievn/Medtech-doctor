// modules
import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../../../components/useful/loader/Loader";

// rtk-queries
import {
  useGetAllCheckListsOfPatientByIdQuery,
  useGetPatientProfileQuery,
} from "../../../../store/features/patients/patientsApi";

// components
import PatientPageAside from "./components/patient-page-aside/PatientPageAside";
import CheckList from "./components/check-list/CheckList";
import MedCard from "./components/medcard/MedCard";

// styles
import classes from "./patientPage.module.scss";

const PatientPage = () => {
  const patientId = localStorage.getItem("patientId");
  console.log("PatientId: ", patientId);

  const { data: patientsProfile, isLoading: patientsProfileLoading } =
    useGetPatientProfileQuery(patientId);
  console.log("patientsProfile: ", patientsProfile);

  return (
    <div className={classes.container}>
      <div>
        {patientsProfileLoading ? null : (
          <PatientPageAside
            patientId={patientId}
            patientsProfile={patientsProfile}
          />
        )}
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
