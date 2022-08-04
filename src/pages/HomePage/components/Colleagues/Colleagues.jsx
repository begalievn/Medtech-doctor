import React from "react";
import BodyHeaderContainer from "../../../../components/Home/body/body-header-container/BodyHeaderContainer";
import BodyOptionsContainer from "../../../../components/Home/body/body-options-container/BodyOptionsContainer";
import BodyTitle from "../../../../components/Home/body/body-title/BodyTitle";
import PageContainer from "../../../../components/Home/body/page-container/PageContainer";
import UserSearch from "../../../../components/Home/body/user-search/UserSearch";
import classes from "../Patients/patients.module.css";
import BodyContentContainer from "../../../../components/Home/body/body-content-container/BodyContentContainer";
import PatientsTable from "../Patients/components/patients-table/PatientsTable";
import DoctorsTable from "./components/doctors-table/DoctorsTable";

const Colleagues = () => {
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
        <DoctorsTable />
      </BodyContentContainer>
    </PageContainer>
  );
};

export default Colleagues;
