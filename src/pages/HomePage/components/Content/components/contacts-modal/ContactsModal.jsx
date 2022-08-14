// modules
import React, { useState } from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";

// components
import TextFieldV3 from "../../../../../../components/Home/body/text-field-v3/TextFieldV3";
import EditSaveButton from "../../../PatientPage/components/edit-save-button/EditSaveButton";

// rtk-queries
import {
  useCreateContactMutation,
  useUpdateContactMutation
} from "../../../../../../store/features/content/contentQuery";

// assets
import { plusIcon } from "../../../../../../assets/icons/icons";

// styles
import classes from "./contactsModal.module.scss";
import { axiosWithToken } from "../../../../../../api/axios";

const boxStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "380px",
  minHeight: "470px",
  borderRadius: "16px",
  background: "#fff",
  boxShadow: 24,
  p: 5,
};

const ContactsModal = ({ visible, setVisible, contacts }) => {
  const [contactsOldValue] = useState(contacts || []);
  const [contactsValue, setContactsValue] = useState(contacts || []);

  const [updateContact] = useUpdateContactMutation();
  const [createContact] = useCreateContactMutation();

  const handleClose = () => {
    setVisible(false);
  };

  const handleContactChange = (e, index) => {
    setContactsValue((prev) => {
      const newArr = prev.map((contact, i) => {
        if (index === i) {
          contact = e.target.value;
          return contact;
        }
        return contact;
      });
      return newArr;
    });
  };

  const handleAddContact = () => {
    setContactsValue([...contactsValue, ""]);
  };

  const handleSaveContacts = async () => {
    contactsValue.forEach((contact, index) => {
      if(contactsOldValue[index]) { // Check if it is a new contacts
        console.log(`${contactsOldValue[index]} to ${contactsValue[index]}`)
        const body = {
          "newContact": contact,
          "oldContact": contactsOldValue[index],
        };
        updateContact(body);
      }else {
        const body = {
          text: contact
        }
        createContact(body);
      }
    })
    // const body = {
    //   newContact: contactsValue[1],
    //   oldContact: contactsOldValue[1],
    // };
    // const response = await axiosWithToken.put("/contact/update", {
    //   newContact: contactsValue[1],
    //   oldContact: contactsOldValue[1],
    // });
    // console.log(response);
  };

  return (
    <Modal open={visible} onClose={handleClose}>
      <Box sx={boxStyles}>
        <div className={classes.close} onClick={handleClose}></div>
        <div className={classes.title}>
          <h3>Контакты</h3>
        </div>
        <div className={classes.first}>
          <TextFieldV3
            type="number"
            value={contactsValue.slice(0, 1)}
            onChange={(e) => handleContactChange(e, 0)}
            label={"Экстренный вызов"}
            labelStyles={{
              color: "#3B393C",
              fontSize: "16px",
              fontWeight: "500",
              marginLeft: "2px",
            }}
            inputStyles={{ width: "100%" }}
          />
        </div>
        <div className={classes.second}>
          <h4 className={classes.subtitle}>Регистратура</h4>
          {contactsValue.map((contact, index) =>
            index === 0 ? null : (
              <TextFieldV3
                type="number"
                key={index}
                value={contact}
                onChange={(e) => handleContactChange(e, index)}
                labelStyles={{ color: "#3B393C" }}
                inputStyles={{ width: "100%", marginBottom: "10px" }}
              />
            )
          )}
        </div>
        <div onClick={handleAddContact} className={classes.add_contact}>
          <p>
            <img src={plusIcon} alt="" /> Добавить контакт
          </p>
        </div>

        <EditSaveButton
          onClick={handleSaveContacts}
          text={"Cохранить"}
          style={{ width: "100%" }}
        />
      </Box>
    </Modal>
  );
};

export default ContactsModal;
