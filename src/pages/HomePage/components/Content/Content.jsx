// modules
import React, { useState, useMemo } from "react";

// components
import BodyHeaderContainer from "../../../../components/Home/body/body-header-container/BodyHeaderContainer";
import BodyTitle from "../../../../components/Home/body/body-title/BodyTitle";
import EditSaveButton from "../PatientPage/components/edit-save-button/EditSaveButton";
import Loader from "../../../../components/useful/loader/Loader";
import ContentBody from "./components/content-body/ContentBody";
import ContactsModal from "./components/contacts-modal/ContactsModal";

// rtk-queries
import {useGetAllContactsQuery, useGetAllContentQuery} from "../../../../store/features/content/contentQuery";

// styles
import classes from "./content.module.scss";

const Content = () => {
  const [contactsModalVisible, setContactsModalVisible] = useState(false);

  const {
    data: content,
    isLoading: contentLoading,
    error: contentError,
  } = useGetAllContentQuery("");

  const { data: contacts, isLoading: contactsLoading, error } = useGetAllContactsQuery("");



  const handeContactModalOpening = () => {
    setContactsModalVisible(true);
  }

  return (
    <div className={classes.container}>
      <BodyHeaderContainer>
        <div className={classes.header}>
          <BodyTitle title={`Контент в мобильном приложении`} />
          <EditSaveButton
            onClick={handeContactModalOpening}
            disabled={contactsLoading}
            text={"Изменить контакты"}
            style={{ width: "180px" }}
          />
        </div>
      </BodyHeaderContainer>
      <div>
        {contentLoading ? <Loader /> : <ContentBody content={content} />}
      </div>
      <div>
        {
          contactsLoading ? null : <ContactsModal contacts={contacts} visible={contactsModalVisible} setVisible={setContactsModalVisible} />
        }
      </div>
    </div>
  );
};

export default Content;
