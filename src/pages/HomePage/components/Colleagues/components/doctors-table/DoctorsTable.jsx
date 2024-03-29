// modules
import React, { useState } from "react";
import {
  Switch,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

// components
import TableDataCell from "../../../../../../components/Home/body/table-data-cell/TableDataCell";
import DoctorsInfoModal from "../doctors-info-modal/DoctorsInfoModal";
import { makeNumberWithZeros } from "../../../../../../utils/helpers/MakeNumberWithZeros";

// styles
import classes from "./doctorsTable.module.scss";
import "./styles.scss";

const doctorsWorkingDays = ["Пн", "Вт", "Ср", "Чт", "Пт"];

const DoctorsTable = ({ doctorsList, setModalOpen, setSelectedDoctorData }) => {


  const handleClick = (data) => {
    setModalOpen(true);
    setSelectedDoctorData(data);
  };

  const rowStyle = {
    "&:hover": {
      cursor: "pointer",
    },
  };

  return (
    <div className={classes.container}>
      <TableContainer
        sx={{
          height: 550,
        }}
      >
        <Table
          sx={{
            height: "max-content",
          }}
        >
          <TableHead sx={{ position: "relative" }}>
            <TableRow
              sx={{
                height: "50px",
                position: "sticky",
                top: "0",
                left: "0",
                zIndex: "10",
                background: "white",
                borderBottom: "solid 1px #3B393C",
              }}
            >
              <th>№</th>
              <th>ФИО врача</th>
              <th>Номер телефона</th>
              <th>Электронная почта</th>
              <th>Пациенты</th>
              {/*<th>График работы</th>*/}
              <th>Статус</th>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "&:before": {
                content: `"-"`,
                lineHeight: "10px",
                display: "block",
                color: "transparent",
              },
            }}
          >
            {doctorsList.map((item, index) => (
              <TableRow
                onClick={() => handleClick(item)}
                sx={{
                  background: index % 2 !== 0 ? "" : "#F8F8F8",
                  "&:hover": {
                    cursor: "pointer",
                    background: "#BDF5D7",
                  },
                }}
                key={index}
              >
                <TableDataCell>{makeNumberWithZeros(index + 1)}</TableDataCell>
                <TableDataCell>{item?.fio}</TableDataCell>
                <TableDataCell>{item?.phoneNumber}</TableDataCell>
                <TableDataCell>{item?.email}</TableDataCell>
                <TableDataCell>{item?.countOfPatients} пациента</TableDataCell>
                {/*<TableDataCell>*/}
                {/*  {doctorsWorkingDays.map((item, index) => (*/}
                {/*    <span key={index}>{`${item} `}</span>*/}
                {/*  ))}*/}
                {/*</TableDataCell>*/}
                <TableDataCell>
                  <Switch
                    checked={item.status === "ACTIVE"}
                    onClick={(e) => e.stopPropagation()}
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

export default DoctorsTable;
