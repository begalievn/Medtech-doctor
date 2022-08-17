// modules
import React, { useEffect, useState } from "react";

// components
import BodyContentContainer from "../../../../components/Home/body/body-content-container/BodyContentContainer";
import BodyHeaderContainer from "../../../../components/Home/body/body-header-container/BodyHeaderContainer";
import BodyOptionsContainer from "../../../../components/Home/body/body-options-container/BodyOptionsContainer";
import BodyTitle from "../../../../components/Home/body/body-title/BodyTitle";
import PageContainer from "../../../../components/Home/body/page-container/PageContainer";
import UserSearch from "../../../../components/Home/body/user-search/UserSearch";
import PatientsTable from "./components/patients-table/PatientsTable";
import Loader from "../../../../components/useful/loader/Loader";
import DownloadButton from "../../../../components/Home/body/download-button/DownloadButton";
import AddPatientButton from "../../../../components/Home/body/add-patient-button/AddPatientButton";

// rtk-queries
import {
  useGetAllPatientsQuery,
  useLazySearchPatientsQuery,
} from "../../../../store/features/patients/patientsApi";

// utils
import { axiosWithContentBlob } from "../../../../api/axios";

// hooks
import useDebounce from "../../../../hooks/useDebounce";
import useGetUserRole from "../../../../hooks/useGetUserRole";

// styles
import classes from "./patients.module.css";
import { ROLES } from "../../../../utils/consts/constants";

const Patients = () => {
  const [searchText, setSearchText] = useState("");

  const role = useGetUserRole();
  const isAdmin = role === ROLES.ADMIN || role === ROLES.SUPERADMIN;

  const { data: patients, isLoading: patientsLoading } =
    useGetAllPatientsQuery("");

  const [searchPatients, { data: searchData = [] }] =
    useLazySearchPatientsQuery();

  const debouncedValue = useDebounce(searchText, 400);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  // Handle downloading patients list
  const handleDownloadPatientsList = async () => {
    try {
      const response = await axiosWithContentBlob(
        "/patient/excel/get-patients"
      );
      const url = URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "patients-list.xlsx"); //or any other extension
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (searchText.length > 0) {
      searchPatients(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <PageContainer>
      <BodyHeaderContainer>
        <BodyTitle title={`Список пациенток`} />
        <BodyOptionsContainer>
          <UserSearch value={searchText} onChange={handleSearchChange} />
          <div className={classes.options_right}>
            {isAdmin && (
              <>
                <DownloadButton
                  text={`Скачать список`}
                  onClick={handleDownloadPatientsList}
                />
                <AddPatientButton text={`Добавить пользователя`} />
              </>
            )}
          </div>
        </BodyOptionsContainer>
      </BodyHeaderContainer>
      <div className={classes.space_between}></div>
      <BodyContentContainer>
        {searchText.length ? (
          <PatientsTable patientsList={searchData} />
        ) : patientsLoading ? (
          <Loader />
        ) : (
          <PatientsTable patientsList={patients} />
        )}
      </BodyContentContainer>
    </PageContainer>
  );
};

export default Patients;
