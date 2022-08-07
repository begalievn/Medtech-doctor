import React from 'react';

import classes from './doctorPageContent.module.scss';
import ContentHeaderV2 from "../../../../../../components/Home/body/content-header-v2/ContentHeaderV2";
import ActivateSwitchButton from "../../../../../../components/Home/body/activate-switch-button/ActivateSwitchButton";
import TableV2 from "../../../../../../components/Home/body/table-v2/TableV2";

const tableHead = [
  "ФИО пациента",
  "Номер телефона",
  "Электронная почта"
]

const data = [
  {
    patientNameSurname: "Ташболот И.Р",
    patientPhoneNumber: "+996 778 890 900",
    patientEmail: "ibragimov.tashbolon78@gmail.com",

  },
  {
    patientNameSurname: "Ташболот И.Р",
    patientPhoneNumber: "+996 778 890 900",
    patientEmail: "ibragimov.tashbolon78@gmail.com",

  },
  {
    patientNameSurname: "Ташболот И.Р",
    patientPhoneNumber: "+996 778 890 900",
    patientEmail: "ibragimov.tashbolon78@gmail.com",

  },
  {
    patientNameSurname: "Ташболот И.Р",
    patientPhoneNumber: "+996 778 890 900",
    patientEmail: "ibragimov.tashbolon78@gmail.com",

  },
  {
    patientNameSurname: "Ташболот И.Р",
    patientPhoneNumber: "+996 778 890 900",
    patientEmail: "ibragimov.tashbolon78@gmail.com",

  }
]

const DoctorPageContent = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <ContentHeaderV2 text={"Список"} />
        <ActivateSwitchButton />
      </div>
      <div className={classes.table}>
        <TableV2 tableHead={tableHead} data={data}  />
      </div>
    </div>
  );
};

export default DoctorPageContent;