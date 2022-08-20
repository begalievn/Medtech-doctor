// modules
import React from "react";

// rtk-queries
import { useGetUserByIdQuery} from "../../../../store/features/user/userApi";

// components
import DoctorsPageAside from "./components/doctors-page-aside/DoctorsPageAside";
import DoctorPageContent from "./components/doctor-page-content/DoctorPageContent";
import Loader from "../../../../components/useful/loader/Loader";


// hooks
import useGetUserData from "../../../../hooks/useGetUserData";



// styles
import classes from "./doctorsPage.module.scss";
import {useGetDoctorProfileQuery} from "../../../../store/features/doctors/doctorsQuery";

const DoctorsPage = () => {

  const userData = useGetUserData();

  const { data: doctorData, isLoading: doctorDataLoading, error: doctorDataError } = useGetUserByIdQuery(userData.userId || userData.user_id);

  const { data: doctorProfile, isLoading } = useGetDoctorProfileQuery(36);
  console.log("***", doctorProfile);
  return (
    <div className={classes.container}>
      <div>
        {
          isLoading ? <Loader /> :
            <DoctorsPageAside doctorData={doctorProfile} />
        }
      </div>
      <div>
        <DoctorPageContent />
      </div>
    </div>
  );
};

export default DoctorsPage;
