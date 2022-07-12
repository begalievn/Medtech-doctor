import React from 'react';
import SelectButton from '../../../../components/useful/select-button/SelectButton';

import { calendarBackground } from '../../../../assets/images/images';

import CalendarComp from './components/calendar/CalendarComp';
import TimeScheduleButton from './components/time-schedule-button/TimeScheduleButton';
import classes from './schedule.module.css';
import PageContainer from '../../../../components/Home/body/page-container/PageContainer';
import { HomeBodyTable } from '../../../../components/Home/body/home-table/HomeBodyTable';

function Schedule() {
  return (
    <div className={classes.schedule}>
      <div className={classes.list_section}>
        <h3>Список запланированных встреч</h3>
        <div className={classes.options}>
          <div className={classes.roles_options}>
            <SelectButton text="Врач" />
            <SelectButton text="Пациент" />
          </div>
          <div className={classes.time_option}>
            <TimeScheduleButton text="Время приема" />
          </div>
        </div>
        <div className={classes.schedule_table}>
          <HomeBodyTable />
        </div>
      </div>

      <div className={classes.calendar_section}>
        <div className={classes.calendar_container}>
          <CalendarComp />
        </div>
        <div className={classes.calendar_image_container}>
          <p>Выберите врача</p>
          <img src={calendarBackground} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Schedule;
