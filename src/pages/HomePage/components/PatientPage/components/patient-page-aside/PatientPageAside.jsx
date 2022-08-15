// modules
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";

// components
import CardTextField from "../card-text-field/CardTextField";
import TextFieldV3 from "../../../../../../components/Home/body/text-field-v3/TextFieldV3";

// rkt-queries
import {useGetAllCheckListsOfPatientByIdQuery} from "../../../../../../store/features/patients/patientsApi";

// assets
import { cardIcon } from "../../../../../../assets/icons/icons";
import { patientProfilePhoto } from "../../../../../../assets/images/images";

// styles
import classes from "./patientPageAside.module.scss";



const PatientPageAside = ({patientId, patientsProfile}) => {
  // tools
  const navigate = useNavigate();

  const { lastName, firstName, middleName, email, phoneNumber, doctor, imageUrl } = patientsProfile;

  const {
    data: checkLists,
    isLoading: checkListsLoading,
    error: checkListsError,
  } = useGetAllCheckListsOfPatientByIdQuery(patientId || "");

  const handleMedCardClick = () => {
    navigate("med-card");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleCheckListClick = () => {
    navigate("check-list");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2>Профиль</h2>
      </div>
      <div className={classes.photo}>
        <img src={imageUrl} alt={"profile photo"} />
      </div>
      <div className={classes.patient_info}>
        <TextFieldV3 disabled={true} value={lastName} label={"Фамилия"} />
        <TextFieldV3 disabled={true} value={firstName} label={"Имя"} />
        <TextFieldV3 disabled={true} value={middleName} label={"Отчество"} />
        <TextFieldV3 disabled={true} value={phoneNumber} label={"Номер телефона"} />
        <TextFieldV3 disabled={true} value={email} label={"Email"} />
        <TextFieldV3 disabled={true} value={doctor} label={"Гинеколог"} />
      </div>

      <div onClick={handleMedCardClick} className={classes.med_card}>
        <h4>Медицинская карта</h4>
        <CardTextField text={"Мед карта"} />
      </div>
      <div className={classes.check_lists}>
        <div onClick={handleCheckListClick} className={classes.check_list_item}>
          <h4>Чек лист</h4>
          {
            checkLists && checkLists.map((item, index) => (
              <CardTextField key={index} text={`Чек лист № ${index + 1}`} />
            ))
          }
          <CardTextField text={"Чек лист № 1"} />
        </div>
      </div>
    </div>
  );
};

export default PatientPageAside;
