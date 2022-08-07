// modules
import React, {useEffect, useState} from "react";

// components
import BodyContentContainer from "../../../../components/Home/body/body-content-container/BodyContentContainer";
import BodyHeaderContainer from "../../../../components/Home/body/body-header-container/BodyHeaderContainer";
import BodyOptionsContainer from "../../../../components/Home/body/body-options-container/BodyOptionsContainer";
import BodyTitle from "../../../../components/Home/body/body-title/BodyTitle";
import PageContainer from "../../../../components/Home/body/page-container/PageContainer";
import UserSearch from "../../../../components/Home/body/user-search/UserSearch";
import PatientsTable from "./components/patients-table/PatientsTable";
import Loader from "../../../../components/useful/loader/Loader";

// rtk-queries
import {useGetAllPatientsQuery} from "../../../../store/features/patients/patientsApi";

// styles
import classes from "./patients.module.css";


const Patients = () => {

  const { data: patients, isLoading: patientsLoading, error: patientsError } = useGetAllPatientsQuery("");

  console.log(patients);



  return (
    <PageContainer>
      <BodyHeaderContainer>
        <BodyTitle title={`Список пациенток`} />
        <BodyOptionsContainer>
          {/*<SelectButton text={`Врач`} />*/}
          <UserSearch />
          <div className={classes.options_right}>
            {/*<DownloadButton text={`Скачать список`} />*/}
            {/*<AddUserButton text={`Добавить пользователя`} />*/}
          </div>
        </BodyOptionsContainer>
      </BodyHeaderContainer>
      <div className={classes.space_between}></div>
      <BodyContentContainer>
        {
          patientsLoading ? <Loader /> :
            <PatientsTable patientsList={patients} />
        }
      </BodyContentContainer>
    </PageContainer>
  );
};

export default Patients;
