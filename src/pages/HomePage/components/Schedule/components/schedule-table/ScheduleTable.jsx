import React from "react";

import { dotsThreeVertical } from "../../../../../../assets/icons/icons";
import { scheduleTableBackground } from "../../../../../../assets/images/images";
import classes from "./scheduleTable.module.css";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableCell from "@mui/material/TableCell";

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

const ScheduleTable = () => {
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
          <TableBody>
            {data.map((item, index) => (
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.doctorNameSurname}</TableCell>
                <TableCell>{item.patientNameSurname}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.time}</TableCell>
                <TableCell>
                  <img src={dotsThreeVertical} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ScheduleTable;
