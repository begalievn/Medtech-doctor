import React from "react";

import { patientProfilePhoto } from "../../../../../../assets/images/images";
import { cardIcon } from "../../../../../../assets/icons/icons";

import classes from "./patientPageAside.module.scss";
import CardTextField from "../card-text-field/CardTextField";
import { Card } from "@mui/material";

const PatientPageAside = () => {
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

      <div className={classes.med_card}>
        <h4>Медицинская карта</h4>
        <CardTextField text={"Мед карта"} />
      </div>
      <div className={classes.check_lists}>
        <h4>Чек лист</h4>
        <CardTextField text={"Чек лист N#1"} />
      </div>
    </div>
  );
};

export default PatientPageAside;
