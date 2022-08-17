// modules
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

// components
import CardTextField from "../card-text-field/CardTextField";
import TextFieldV3 from "../../../../../../components/Home/body/text-field-v3/TextFieldV3";
import Loader from "../../../../../../components/useful/loader/Loader";

// rkt-queries
import { useGetAllCheckListsOfPatientByIdQuery } from "../../../../../../store/features/patients/patientsApi";

// assets

// styles
import classes from "./patientPageAside.module.scss";
import {dateConverter} from "../../../../../../utils/helpers/dateConverter";

const PatientPageAside = ({ patientId, patientsProfile, setCheckListId }) => {
  // tools
  const navigate = useNavigate();

  // state
  const [activeCheckList, setActiveCheckList] = useState("");

  const {
    lastName,
    firstName,
    middleName,
    email,
    phoneNumber,
    doctor,
    imageUrl,
  } = patientsProfile;

  const {
    data: checkLists,
    isLoading: checkListsLoading,
    error: checkListsError,
  } = useGetAllCheckListsOfPatientByIdQuery(patientId || "");

  const handleMedCardClick = () => {
    navigate("med-card");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleCheckListClick = (index, item) => {
    const checkListId = item.id;
    setCheckListId(checkListId);
    setActiveCheckList(index);
    navigate(`check-list/${checkListId}`);
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
        <TextFieldV3
          disabled={true}
          value={phoneNumber}
          label={"Номер телефона"}
        />
        <TextFieldV3 disabled={true} value={email} label={"Email"} />
        <TextFieldV3 disabled={true} value={doctor} label={"Гинеколог"} />
      </div>

      <div onClick={handleMedCardClick} className={classes.med_card}>
        <h4>Медицинская карта</h4>
        <CardTextField text={"Мед карта"} />
      </div>
      <div className={classes.check_lists}>
        <div className={classes.check_list_item}>
          <h4>Чек лист</h4>
          {checkListsLoading ? (
            <Loader />
          ) : (
            checkLists.map((item, index) => (
              <CardTextField
                key={index}
                onClick={() => handleCheckListClick(index, item)}
                text={`Чек лист № ${index + 1}`}
                active={activeCheckList === index}
                date={dateConverter(item.date, ".")}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientPageAside;
