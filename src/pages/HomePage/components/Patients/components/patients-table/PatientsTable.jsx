import React from "react";
import {
  Switch,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import classes from "./patientsTable.module.scss";
import TableDataCell from "../../../../../../components/Home/body/table-data-cell/TableDataCell";
import { makeNumberWithZeros } from "../../../../../../utils/helpers/MakeNumberWithZeros";
import { useNavigate } from "react-router-dom";
import CheckListDataCell from "../../../PatientPage/components/check-list-data-cell/CheckListDataCell";

const patients = [
  {
    id: 1,
    patientNameSurname: "Ташболот И.Р",
    patientNumber: "+996 778 890 900",
    patientEmail: "ibragimov.tashbolon78@gmail.com",
    patientPregnancyWeeks: 39,
    patientAddress: "ул. Молодая гвардия",
  },
  {
    id: 2,
    patientNameSurname: "Ташболот И.Р",
    patientNumber: "+996 778 890 900",
    patientEmail: "ibragimov.tashbolon78@gmail.com",
    patientPregnancyWeeks: 39,
    patientAddress: "ул. Молодая гвардия",
  },
  {
    id: 3,
    patientNameSurname: "Ташболот И.Р",
    patientNumber: "+996 778 890 900",
    patientEmail: "ibragimov.tashbolon78@gmail.com",
    patientPregnancyWeeks: 39,
    patientAddress: "ул. Молодая гвардия",
  },
  {
    id: 4,
    patientNameSurname: "Ташболот И.Р",
    patientNumber: "+996 778 890 900",
    patientEmail: "ibragimov.tashbolon78@gmail.com",
    patientPregnancyWeeks: 39,
    patientAddress: "ул. Молодая гвардия",
  },
  {
    id: 5,
    patientNameSurname: "Ташболот И.Р",
    patientNumber: "+996 778 890 900",
    patientEmail: "ibragimov.tashbolon78@gmail.com",
    patientPregnancyWeeks: 39,
    patientAddress: "ул. Молодая гвардия",
  },
  {
    id: 6,
    patientNameSurname: "Ташболот И.Р",
    patientNumber: "+996 778 890 900",
    patientEmail: "ibragimov.tashbolon78@gmail.com",
    patientPregnancyWeeks: 39,
    patientAddress: "ул. Молодая гвардия",
  },
  {
    id: 7,
    patientNameSurname: "Ташболот И.Р",
    patientNumber: "+996 778 890 900",
    patientEmail: "ibragimov.tashbolon78@gmail.com",
    patientPregnancyWeeks: 39,
    patientAddress: "ул. Молодая гвардия",
  },
  {
    id: 8,
    patientNameSurname: "Ташболот И.Р",
    patientNumber: "+996 778 890 900",
    patientEmail: "ibragimov.tashbolon78@gmail.com",
    patientPregnancyWeeks: 39,
    patientAddress: "ул. Молодая гвардия",
  },
  {
    id: 9,
    patientNameSurname: "Ташболот И.Р",
    patientNumber: "+996 778 890 900",
    patientEmail: "ibragimov.tashbolon78@gmail.com",
    patientPregnancyWeeks: 39,
    patientAddress: "ул. Молодая гвардия",
  },
  {
    id: 10,
    patientNameSurname: "Ташболот И.Р",
    patientNumber: "+996 778 890 900",
    patientEmail: "ibragimov.tashbolon78@gmail.com",
    patientPregnancyWeeks: 39,
    patientAddress: "ул. Молодая гвардия",
  },
  {
    id: 11,
    patientNameSurname: "Ташболот И.Р",
    patientNumber: "+996 778 890 900",
    patientEmail: "ibragimov.tashbolon78@gmail.com",
    patientPregnancyWeeks: 39,
    patientAddress: "ул. Молодая гвардия",
  },
];

const PatientsTable = () => {
  const navigate = useNavigate();

  const handleClick = (data) => {
    console.log(data);
    navigate(`${data.id}`);
  };

  const handleSwitchChange = (data) => {
    console.log("Switch changed: ", data);
  };

  return (
    <div className={classes.container}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                borderBottom: "1px solid #3B393C",
                height: "50px",
                marginBottom: "5px",
              }}
            >
              <th>№</th>
              <th>ФИО пациента</th>
              <th>Номер телефона</th>
              <th>Электронная почта</th>
              <th>Срок бер-ти</th>
              <th>Адрес прописки</th>
              <th>Статус</th>
            </TableRow>
          </TableHead>
          <div style={{ width: "100%", height: "10px" }}></div>
          <TableBody>
            {patients.map((item, index) => (
              <TableRow
                sx={{
                  background: index % 2 !== 0 ? "" : "#F8F8F8",
                  border: "none",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                key={index}
                onClick={() => handleClick(item)}
              >
                <TableDataCell>{makeNumberWithZeros(index + 1)}</TableDataCell>
                <TableDataCell>{item.patientNameSurname}</TableDataCell>
                <TableDataCell>{item.patientNumber}</TableDataCell>
                <TableDataCell>{item.patientEmail}</TableDataCell>
                <TableDataCell>{item.patientPregnancyWeeks}</TableDataCell>
                <TableDataCell>{item.patientAddress}</TableDataCell>
                <TableDataCell onClick={(e) => e.stopPropagation()}>
                  {
                    <Switch
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => handleSwitchChange(item, e)}
                    />
                  }
                </TableDataCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PatientsTable;
