import React, { useState } from "react";

import classes from "./doctorsTable.module.scss";
import {
  Switch,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableDataCell from "../../../../../../components/Home/body/table-data-cell/TableDataCell";
import DoctorsInfoModal from "../doctors-info-modal/DoctorsInfoModal";
import { makeNumberWithZeros } from "../../../../../../utils/helpers/MakeNumberWithZeros";

const data = [
  {
    doctorsNameSurname: "Ташболот И.Р",
    doctorsNumber: "+996 778 890 900",
    doctorsEmail: "ibragimov.tashbolon78@gmail.com",
    patientsQuantity: 45,
    doctorsWorkingDays: ["Пн", "Вт", "Ср", "Чт", "Пт"],
    doctorsStatus: true,
  },
  {
    doctorsNameSurname: "Ташболот И.Р",
    doctorsNumber: "+996 778 890 900",
    doctorsEmail: "ibragimov.tashbolon78@gmail.com",
    patientsQuantity: 45,
    doctorsWorkingDays: ["Пн", "Вт", "Ср", "Чт", "Пт"],
    doctorsStatus: true,
  },
  {
    doctorsNameSurname: "Ташболот И.Р",
    doctorsNumber: "+996 778 890 900",
    doctorsEmail: "ibragimov.tashbolon78@gmail.com",
    patientsQuantity: 45,
    doctorsWorkingDays: ["Пн", "Вт", "Ср", "Чт", "Пт"],
    doctorsStatus: true,
  },
  {
    doctorsNameSurname: "Ташболот И.Р",
    doctorsNumber: "+996 778 890 900",
    doctorsEmail: "ibragimov.tashbolon78@gmail.com",
    patientsQuantity: 45,
    doctorsWorkingDays: ["Пн", "Вт", "Ср", "Чт", "Пт"],
    doctorsStatus: true,
  },
  {
    doctorsNameSurname: "Ташболот И.Р",
    doctorsNumber: "+996 778 890 900",
    doctorsEmail: "ibragimov.tashbolon78@gmail.com",
    patientsQuantity: 45,
    doctorsWorkingDays: ["Пн", "Вт", "Ср", "Чт", "Пт"],
    doctorsStatus: true,
  },
  {
    doctorsNameSurname: "Ташболот И.Р",
    doctorsNumber: "+996 778 890 900",
    doctorsEmail: "ibragimov.tashbolon78@gmail.com",
    patientsQuantity: 45,
    doctorsWorkingDays: ["Пн", "Вт", "Ср", "Чт", "Пт"],
    doctorsStatus: true,
  },
];

const DoctorsTable = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = (data) => {
    setModalOpen(true);
    console.log(data);
  };

  const rowStyle = {
    "&:hover": {
      cursor: "pointer",
    },
  };

  return (
    <div className={classes.container}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                borderBottom: "1px solid black",
                height: "50px",
              }}
            >
              <th>N#</th>
              <th>ФИО врача</th>
              <th>Номер телефона</th>
              <th>Электронная почта</th>
              <th>Пациенты</th>
              <th>График работы</th>
              <th>Статус</th>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                onClick={() => handleClick(item)}
                key={index}
                sx={rowStyle}
              >
                <TableDataCell>{makeNumberWithZeros(index + 1)}</TableDataCell>
                <TableDataCell>{item.doctorsNameSurname}</TableDataCell>
                <TableDataCell>{item.doctorsNumber}</TableDataCell>
                <TableDataCell>{item.doctorsEmail}</TableDataCell>
                <TableDataCell>{item.patientsQuantity} пациентов</TableDataCell>
                <TableDataCell>
                  {item.doctorsWorkingDays.map((item, index) => (
                    <span>{`${item} `}</span>
                  ))}
                </TableDataCell>
                <TableDataCell>
                  <Switch defaultChecked />
                </TableDataCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isModalOpen && <DoctorsInfoModal />}
    </div>
  );
};

export default DoctorsTable;
