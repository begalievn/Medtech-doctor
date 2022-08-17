// modules
import React, {useState} from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../../../components/useful/loader/Loader";

// rtk-queries
import {
  useGetAllCheckListsOfPatientByIdQuery,
  useGetPatientMedCardInfoByIdQuery,
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
  const [checkListId, setCheckListId] = useState();

  const {
    data: medCard,
    isLoading: medCardLoading,
    error: medCardError,
    refetch
  } = useGetPatientMedCardInfoByIdQuery(patientId);


  const { data: patientsProfile, isLoading: patientsProfileLoading } =
    useGetPatientProfileQuery(patientId);

  return (
    <div className={classes.container}>
      <div>
        {patientsProfileLoading ? null : (
          <PatientPageAside
            patientId={patientId}
            patientsProfile={patientsProfile}
            setCheckListId={setCheckListId}
          />
        )}
      </div>
      <div>
        {
          medCardLoading ? <Loader /> :
            <Routes>
              <Route exact path="/" element={<MedCard medCard={medCard} refetch={refetch} patientId={patientId} />} />
              <Route path="/check-list/:checkListId" element={<CheckList checkListId={checkListId} />} />
              <Route path="/med-card" element={<MedCard />} />
            </Routes>
        }
      </div>
    </div>
  );
};

export default PatientPage;
