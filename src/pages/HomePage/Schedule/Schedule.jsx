import React from 'react';
import SelectButton from '../../../components/useful/select-button/SelectButton';
import TimeScheduleButton from './components/time-schedule-button/TimeScheduleButton';

import classes from './schedule.module.css';

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
            <TimeScheduleButton />
          </div>
        </div>
      </div>

      <div className={classes.calendar_section}></div>
    </div>
  );
}

export default Schedule;
