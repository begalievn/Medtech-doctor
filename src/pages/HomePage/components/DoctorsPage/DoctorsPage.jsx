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

const DoctorsPage = () => {

  const userData = useGetUserData();

  const { data: doctorData, isLoading: doctorDataLoading, error: doctorDataError } = useGetUserByIdQuery(userData.userId || userData.user_id);

  return (
    <div className={classes.container}>
      <div>
        {
          doctorDataLoading ? <Loader /> :
            <DoctorsPageAside doctorData={doctorData} />
        }
      </div>
      <div>
        <DoctorPageContent />
      </div>
    </div>
  );
};

export default DoctorsPage;
