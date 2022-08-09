// modules
import React from "react";
import {Routes, Route, useNavigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

// rtk-queries
import { useGetAllCheckListsOfPatientByIdQuery } from "../../../../store/features/patients/patientsApi";

// components
import PatientPageAside from "./components/patient-page-aside/PatientPageAside";
import CheckList from "./components/check-list/CheckList";

import MedCard from "./components/medcard/MedCard";
// styles
import classes from "./patientPage.module.scss";
import Loader from "../../../../components/useful/loader/Loader";

const PatientPage = () => {

  const patientById = useSelector(state => state.patients.patientById);
  console.log("PatientById: ", patientById);

  const { data: checkLists, isLoading: checkListsLoading, error: checkListsError} = useGetAllCheckListsOfPatientByIdQuery(patientById.patientId || "");

  console.log("CheckLists", checkLists);
  if(checkListsError) {
    console.log(checkListsError);
  }


  return (
    <div className={classes.container}>
      <div>
        {
          checkListsLoading ? <Loader /> :
            <PatientPageAside checkLists={checkLists} />
        }
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
