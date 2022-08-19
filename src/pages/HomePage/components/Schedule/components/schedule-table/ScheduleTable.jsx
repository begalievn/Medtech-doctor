// modules
import React from "react";

// components
import {
  Switch,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableDataCell from "../../../../../../components/Home/body/table-data-cell/TableDataCell";
import { makeNumberWithZeros } from "../../../../../../utils/helpers/MakeNumberWithZeros";

// assets
import { infoIcon } from "../../../../../../assets/icons/icons";
import { scheduleTableBackground } from "../../../../../../assets/images/images";

// styles
import classes from "./scheduleTable.module.scss";
import './style.scss';


const ScheduleTable = ({
  setOpenAppointmentModal,
  setAppointmentModalData,
  scheduleData,
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
            <TableRow
              className={classes.table_headers}
              sx={{
                height: "50px",
                position: "sticky",
                top: "0",
                left: "0",
                zIndex: "10",
                background: "white",
                // boxShadow: "0px 1px 1px black"
                borderBottom: "solid 1px #3B393C",
              }}
            >
              <th>№</th>
              <th>ФИО врача</th>
              <th>ФИО пациента</th>
              <th>Дата</th>
              <th>Время</th>
              <th></th>
            </TableRow>
          </TableHead>
          <TableBody sx={{ "&:before": {content: `"-"`, lineHeight: "10px", display: 'block', color: 'transparent'}}}>
            {scheduleData.map((item, index) => (
              <TableRow
                key={index}
                sx={{
                  background: index % 2 !== 0 ? "" : "#F8F8F8",
                  border: "none",
                  "&:hover": {
                    cursor: "pointer",
                    background: "#BDF5D7",
                  },
                }}
              >
                <TableDataCell>{makeNumberWithZeros(index + 1)}</TableDataCell>
                <TableDataCell>{item?.doctorFullName}</TableDataCell>
                <TableDataCell>{item?.patientFullName}</TableDataCell>
                <TableDataCell>{item?.date}</TableDataCell>
                <TableDataCell>{item?.time}</TableDataCell>
                <TableDataCell>
                  <div
                    className={classes.option_button}
                    onClick={() => handleAppointmentClick(item)}
                  >
                    <img
                      src={infoIcon}
                    />
                  </div>
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


// const data = [
//   {
//     id: 1,
//     doctorNameSurname: "Сабиров Ш.И",
//     patientNameSurname: "Мансурова А.П",
//     date: "16.07.2022",
//     time: "09:50",
//   },
//   {
//     id: 1,
//     doctorNameSurname: "Сабиров Ш.И",
//     patientNameSurname: "Мансурова А.П",
//     date: "16.07.2022",
//     time: "10:30",
//   },
//   {
//     id: 1,
//     doctorNameSurname: "Сабиров Ш.И",
//     patientNameSurname: "Мансурова А.П",
//     date: "16.07.2022",
//     time: "11:30",
//   },
// ];


