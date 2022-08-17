import React from 'react';

import classes from './doctorsPageAside.module.scss';
import EditButtonV2 from "../../../../../../components/Home/body/edit-button-v2/EditButtonV2";
import AsideHeaderV2 from "../../../../../../components/Home/body/aside-header-v2/AsideHeaderV2";

import { avatarPlaceholder } from '../../../../../../assets/images/images';
import AvatarPhotoV2 from "../../../../../../components/Home/body/avatar-photo-v2/AvatarPhotoV2";
import TextFieldV2 from "../../../../../../components/Home/body/text-field-v2/TextFieldV2";


const workingDays = [
  "Mn", "Tu", "Wd", "Th", "Fr", "St", "Sn"
]

/*
email: "trustmed.team3@gmail.com"
firstName: "Neobis"
lastName: "Team"
middleName: "Four"
otpUsed: true
phoneNumber: ""
resetCode: null
role: {id: 1, name: 'SUPERADMIN', permissionEntities: Array(0), authorities: Array(1)}
status: "ACTIVE"
userId: 5
 */


const DoctorsPageAside = ({ doctorData }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
          <AsideHeaderV2 text={"Профиль"} />
          <EditButtonV2 text={"Редактировать"} />
      </div>
      <div className={classes.avatar}>
        <AvatarPhotoV2 image={avatarPlaceholder} />
      </div>
      <div className={classes.doctors_info}>
        <TextFieldV2 label={"Фамилия"} text={doctorData.lastName} />
        <TextFieldV2 label={"Имя"} text={doctorData.firstName} />
        <TextFieldV2 label={"Отчество"} text={doctorData.middleName} />
        <TextFieldV2 label={"Количество пациенток"} text={0} />
        <TextFieldV2 label={"Email"} text={doctorData.email} />
        <TextFieldV2 label={"Номер телефона"} text={doctorData.phoneNumber} />
      </div>
      <div className={classes.working_days}>
        <h4>Рабочие дни</h4>
        <div className={classes.days}>
          {
            workingDays.map((day, index) => (
              <div key={index}>
                <span>{day}</span>
              </div>
            ))
          }
        </div>
      </div>

      <div className={classes.working_hours}>
        <h4>Время интервью</h4>
        <div className={classes.time_row}>
          <div className={classes.time_block}>
            <span>С</span>
            <div className={classes.time}>
              <span>{"data"}</span>
            </div>
          </div>
          <div className={classes.time_block}>
            <span>До</span>
            <div className={classes.time}>
              <span>{"data"}</span>
            </div>
          </div>
        </div>

        <div className={classes.time_row}>
          <div className={classes.time_block}>
            <span>С</span>
            <div className={classes.time}>
              <span>{"data"}</span>
            </div>
          </div>
          <div className={classes.time_block}>
            <span>До</span>
            <div className={classes.time}>
              <span>{"data"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPageAside;