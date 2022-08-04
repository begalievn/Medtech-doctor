import React from 'react';

import classes from './doctorsPageAside.module.scss';
import EditButtonV2 from "../../../../../../components/Home/body/edit-button-v2/EditButtonV2";
import AsideHeaderV2 from "../../../../../../components/Home/body/aside-header-v2/AsideHeaderV2";

import {doctorsAva} from '../../../../../../assets/images/images';
import AvatarPhotoV2 from "../../../../../../components/Home/body/avatar-photo-v2/AvatarPhotoV2";
import TextFieldV2 from "../../../../../../components/Home/body/text-field-v2/TextFieldV2";


const workingDays = [
  "Mn", "Tu", "Wd", "Th", "Fr", "St", "Sn"
]


const DoctorsPageAside = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
          <AsideHeaderV2 text={"Профиль"} />
          <EditButtonV2 text={"Редактировать"} />
      </div>
      <div className={classes.avatar}>
        <AvatarPhotoV2 image={doctorsAva} />
      </div>
      <div className={classes.doctors_info}>
        <TextFieldV2 label={"Фамилия"} text={"Begaliev"} />
        <TextFieldV2 label={"Фамилия"} text={"Begaliev"} />
        <TextFieldV2 label={"Фамилия"} text={"Begaliev"} />
        <TextFieldV2 label={"Фамилия"} text={"Begaliev"} />
        <TextFieldV2 label={"Фамилия"} text={"Begaliev"} />
        <TextFieldV2 label={"Фамилия"} text={"Begaliev"} />
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