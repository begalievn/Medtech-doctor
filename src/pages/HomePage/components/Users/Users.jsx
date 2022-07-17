import React from "react";
import AddUserButton from "../../../../components/Home/body/add-user-button/AddUserButton";
import BodyContentContainer from "../../../../components/Home/body/body-content-container/BodyContentContainer";
import BodyHeaderContainer from "../../../../components/Home/body/body-header-container/BodyHeaderContainer";
import BodyOptionsContainer from "../../../../components/Home/body/body-options-container/BodyOptionsContainer";
import BodyTitle from "../../../../components/Home/body/body-title/BodyTitle";
import DownloadButton from "../../../../components/Home/body/download-button/DownloadButton";
import { HomeBodyTable } from "../../../../components/Home/body/home-table/HomeBodyTable";
import PageContainer from "../../../../components/Home/body/page-container/PageContainer";
import SelectButton from "../../../../components/useful/select-button/SelectButton";

import classes from "./users.module.css";

const Users = () => {
  return (
    <PageContainer>
      <BodyHeaderContainer>
        <BodyTitle title={`Список пользователей`} />
        <BodyOptionsContainer>
          <SelectButton text={`Врач`} />
          <div className={classes.options_right}>
            <DownloadButton text={`Скачать список`} />
            {/*<AddUserButton text={`Добавить пользователя`} />*/}
          </div>
        </BodyOptionsContainer>
      </BodyHeaderContainer>
      <div className={classes.space_between}></div>
      <BodyContentContainer>
        <HomeBodyTable />
      </BodyContentContainer>
    </PageContainer>
  );
};

export default Users;
