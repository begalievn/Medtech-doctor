import React from "react";

import { infoIcon } from "../../../../../../assets/icons/icons";
import { scheduleTableBackground } from "../../../../../../assets/images/images";
import classes from "./scheduleTable.module.css";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableDataCell from "../../../../../../components/Home/body/table-data-cell/TableDataCell";
import { makeNumberWithZeros } from "../../../../../../utils/helpers/MakeNumberWithZeros";

const data = [
  {
    id: 1,
    doctorNameSurname: "Сабиров Ш.И",
    patientNameSurname: "Мансурова А.П",
    date: "16.07.2022",
    time: "09:50",
  },
  {
    id: 1,
    doctorNameSurname: "Сабиров Ш.И",
    patientNameSurname: "Мансурова А.П",
    date: "16.07.2022",
    time: "10:30",
  },
  {
    id: 1,
    doctorNameSurname: "Сабиров Ш.И",
    patientNameSurname: "Мансурова А.П",
    date: "16.07.2022",
    time: "11:30",
  },
  {
    id: 1,
    doctorNameSurname: "Сабиров Ш.И",
    patientNameSurname: "Мансурова А.П",
    date: "16.07.2022",
    time: "15:00",
  },
  {
    id: 1,
    doctorNameSurname: "Сабиров Ш.И",
    patientNameSurname: "Мансурова А.П",
    date: "16.07.2022",
    time: "15:30",
  },
  {
    id: 1,
    doctorNameSurname: "Сабиров Ш.И",
    patientNameSurname: "Мансурова А.П",
    date: "16.07.2022",
    time: "16:30",
  },
];

const ScheduleTable = ({
  setOpenAppointmentModal,
  setAppointmentModalData,
}) => {
  const handleAppointmentClick = (data) => {
    setOpenAppointmentModal(true);
    setAppointmentModalData(data);
    console.log(data);
    console.log("Hello, World!");
  };

  return (
    <div className={classes.container}>
      <div className={classes.container_bg_layer}>
        {/*<img src={scheduleTableBackground} alt="" />*/}
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className={classes.table_headers}>
              <th>N#</th>
              <th>ФИО врача</th>
              <th>ФИО пациента</th>
              <th>Дата</th>
              <th>Время</th>
              <th></th>
            </TableRow>
          </TableHead>
          <TableBody sx={{ "&:before": {content: `"-"`, lineHeight: "10px", display: 'block', color: 'transparent'}}}>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableDataCell>{makeNumberWithZeros(index + 1)}</TableDataCell>
                <TableDataCell>{item.doctorNameSurname}</TableDataCell>
                <TableDataCell>{item.patientNameSurname}</TableDataCell>
                <TableDataCell>{item.date}</TableDataCell>
                <TableDataCell>{item.time}</TableDataCell>
                <TableDataCell>
                  <img
                    onClick={() => handleAppointmentClick(item)}
                    className={classes.option_button}
                    src={infoIcon}
                  />
                </TableDataCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ScheduleTable;
