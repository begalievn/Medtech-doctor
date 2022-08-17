// modules
import React, { useEffect, useState } from "react";

// components
import BodyHeaderContainer from "../../../../components/Home/body/body-header-container/BodyHeaderContainer";
import BodyOptionsContainer from "../../../../components/Home/body/body-options-container/BodyOptionsContainer";
import BodyTitle from "../../../../components/Home/body/body-title/BodyTitle";
import PageContainer from "../../../../components/Home/body/page-container/PageContainer";
import UserSearch from "../../../../components/Home/body/user-search/UserSearch";
import BodyContentContainer from "../../../../components/Home/body/body-content-container/BodyContentContainer";
import DoctorsTable from "./components/doctors-table/DoctorsTable";
import DownloadButton from "../../../../components/Home/body/download-button/DownloadButton";
import AddUserButton from "../../../../components/Home/body/add-user-button/AddUserButton";
import Loader from "../../../../components/useful/loader/Loader";

// rtk-queries
import {
  useGetAllDoctorsQuery,
  useLazySearchDoctorsQuery,
} from "../../../../store/features/doctors/doctorsQuery";

// hooks
import useGetUserRole from "../../../../hooks/useGetUserRole";
import useDebounce from "../../../../hooks/useDebounce";

// constants
import { ROLES } from "../../../../utils/consts/constants";

// styles
import classes from "./colleagues.module.scss";
import { axiosWithContentBlob } from "../../../../api/axios";

const Colleagues = () => {
  const [searchText, setSearchText] = useState("");

  const { data: doctorsList, isLoading: doctorsListLoading } =
    useGetAllDoctorsQuery("");

  const [searchDoctors, { data: searchData = [] }] =
    useLazySearchDoctorsQuery();

  const debouncedValue = useDebounce(searchText, 400);

  const role = useGetUserRole();
  const isSuperAdmin = role === ROLES.SUPERADMIN;
  const isAdmin = role === ROLES.ADMIN || role === ROLES.SUPERADMIN;

  const handleSearchTextChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  // Handle downloading doctors list
  const handleDownloadDoctorsList = async () => {
    try {
      const response = await axiosWithContentBlob("/doctor/excel/get-doctors");
      const url = URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "doctors-list.xlsx"); //or any other extension
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (searchText.length > 0) {
      searchDoctors(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <PageContainer>
      <BodyHeaderContainer>
        <BodyTitle title={`Список врачей`} />
        <BodyOptionsContainer>
          <UserSearch value={searchText} onChange={handleSearchTextChange} />
          {isAdmin && (
            <div
              className={
                isSuperAdmin ? classes.options_right : classes.single_option
              }
            >
              <DownloadButton
                text={`Скачать список`}
                onClick={handleDownloadDoctorsList}
              />
              {isSuperAdmin ? (
                <AddUserButton text={`Добавить пользователя`} />
              ) : null}
            </div>
          )}
        </BodyOptionsContainer>
      </BodyHeaderContainer>
      <div className={classes.space_between}></div>
      <BodyContentContainer>
        {searchText ? (
          <DoctorsTable doctorsList={searchData} />
        ) : doctorsListLoading ? (
          <Loader />
        ) : (
          <DoctorsTable doctorsList={doctorsList} />
        )}
      </BodyContentContainer>
    </PageContainer>
  );
};

export default Colleagues;
