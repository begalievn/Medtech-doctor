// modules
import React, { useState, useMemo } from "react";

// components
import PageContainer from "../../../../components/Home/body/page-container/PageContainer";
import BodyHeaderContainer from "../../../../components/Home/body/body-header-container/BodyHeaderContainer";
import BodyContentContainer from "../../../../components/Home/body/body-content-container/BodyContentContainer";
import BodyTitle from "../../../../components/Home/body/body-title/BodyTitle";
import EditSaveButton from "../PatientPage/components/edit-save-button/EditSaveButton";
import ContentSquare from "./components/content-square/ContentSquare";

// rtk-queries
import { useGetAllContentQuery } from "../../../../store/features/content/contentQuery";

// styles
import classes from "./content.module.scss";
import { collectDataFromContent } from "../../../../utils/helpers/CollectDataFromContent";
import Loader from "../../../../components/useful/loader/Loader";
import ContentBody from "./components/content-body/ContentBody";
import ContentModal from "./components/content-modal/ContentModal";

const Content = () => {

  const {
    data: content,
    isLoading: contentLoading,
    error: contentError,
  } = useGetAllContentQuery("");
  if (!contentLoading) {
  }

  return (
    <div className={classes.container}>
      <BodyHeaderContainer>
        <div className={classes.header}>
          <BodyTitle title={`Контент в мобильном приложении`} />
          <EditSaveButton
            text={"Изменить контакты"}
            style={{ width: "180px" }}
          />
        </div>
      </BodyHeaderContainer>
      <div>
        {contentLoading ? <Loader /> : <ContentBody content={content} />}
      </div>
    </div>
  );
};

export default Content;
