// modules
import React from "react";

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

// hooks
import useGetUserRole from "../../../../hooks/useGetUserRole";

// styles
// import classes from "../Patients/patients.module.css";
import classes from './colleagues.module.scss';
import { ROLES } from "../../../../utils/consts/constants";

const Colleagues = () => {
  const role = useGetUserRole();

  return (
    <PageContainer>
      <BodyHeaderContainer>
        <BodyTitle title={`Список пациенток`} />
        <BodyOptionsContainer>
          <UserSearch />
          <div className={classes.options_right}>
            <DownloadButton text={`Скачать список`} patients={true} />
            {role === ROLES.SUPERADMIN ? (
              <AddUserButton text={`Добавить пользователя`} />
            ) : null}
          </div>
        </BodyOptionsContainer>
      </BodyHeaderContainer>
      <div className={classes.space_between}></div>
      <BodyContentContainer>
        <DoctorsTable />
      </BodyContentContainer>
    </PageContainer>
  );
};

export default Colleagues;
