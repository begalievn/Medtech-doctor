// modules
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";

// components
import CardTextField from "../card-text-field/CardTextField";


// assets
import { cardIcon } from "../../../../../../assets/icons/icons";
import { patientProfilePhoto } from "../../../../../../assets/images/images";

// styles
import classes from "./patientPageAside.module.scss";
import {useGetAllCheckListsOfPatientByIdQuery} from "../../../../../../store/features/patients/patientsApi";



const PatientPageAside = ({checkLists}) => {
  // tools
  const navigate = useNavigate();

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
        <img src={patientProfilePhoto} alt={"profile photo"} />
      </div>
      <div className={classes.patient_info}>
        <p>{"Фамилия"}</p>
        <div>
          <p>{"data"}</p>
        </div>
        <p>{"Имя"}</p>
        <div>
          <p>{"data"}</p>
        </div>
        <p>{"Отчество"}</p>
        <div>
          <p>{"data"}</p>
        </div>
        <p>{"Номер телефона"}</p>
        <div>
          <p>{"data"}</p>
        </div>
        <p>{"Email"}</p>
        <div>
          <p>{"data"}</p>
        </div>
        <p>{"Гинеколог"}</p>
        <div>
          <p>{"data"}</p>
        </div>
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
              <CardTextField key={index} text={"Чек лист N#1"} />
            ))
          }
          <CardTextField text={"Чек лист N#1"} />
        </div>
      </div>
    </div>
  );
};

export default PatientPageAside;
