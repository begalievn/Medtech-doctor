import React from 'react';

import scheduleBackground from '../../../../../assets/images/schedule-table-bg.png';
import classes from './scheduleTable.module.css';

const ScheduleTable = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container_bg_layer}>
        <img src={scheduleBackground} alt="" />
      </div>
      <table>
        <thead>
          <tr className={classes.table_headers}>
            <th>N#</th>
            <th>ФИО врача</th>
            <th>ФИО пациента</th>
            <th>Дата</th>
            <th>Время</th>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ScheduleTable;
