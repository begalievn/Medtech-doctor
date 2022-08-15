// modules
import React, {useState} from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

// components
import CheckListDataCell from "../check-list-data-cell/CheckListDataCell";
import CheckListTextFieldV2 from "../check-list-textfiled-v2/CheckListTextFieldV2";

// styles
import classes from "./checkListTable.module.scss";


const CheckListTable = () => {
  const [testValue, setTestValue] = useState("some text");

  const handelTextValueChange = (e) => {
    console.log(e.target.value);
    setTestValue(e.target.value);
  }

  return (
    <div className={classes.container}>
      <TableContainer>
        <Table
          sx={{
            minWidth: 650,
            borderCollapse: "separate",
            borderSpacing: "0px 5px",
          }}
        >
          <TableHead>
            <TableRow>
              <th>№</th>
              <th>Анализ/Жалоба</th>
              <th>Показатели</th>
              <th>Описание</th>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ marginBottom: "10px" }}>
              <CheckListDataCell first={true}>data</CheckListDataCell>
              <CheckListDataCell>data</CheckListDataCell>
              <CheckListDataCell>
                <CheckListTextFieldV2 onChange={handelTextValueChange} value={testValue} placeholder={"Введите показатели"} />
              </CheckListDataCell>
              <CheckListDataCell last={true}>
                <CheckListTextFieldV2 onChange={handelTextValueChange} value={testValue} placeholder={"Пропишите описание"} />
              </CheckListDataCell>
            </TableRow>
            <TableRow sx={{ marginBottom: "10px" }}>
              <CheckListDataCell first={true}>data</CheckListDataCell>
              <CheckListDataCell>data</CheckListDataCell>
              <CheckListDataCell>
                <CheckListTextFieldV2 onChange={handelTextValueChange} value={testValue} placeholder={"Введите показатели"} />
              </CheckListDataCell>
              <CheckListDataCell last={true}>
                <CheckListTextFieldV2 onChange={handelTextValueChange} value={testValue} placeholder={"Пропишите описание"} />
              </CheckListDataCell>
            </TableRow>
            <TableRow>
              <CheckListDataCell first={true}>data</CheckListDataCell>
              <CheckListDataCell>data</CheckListDataCell>
              <CheckListDataCell>
                <CheckListTextFieldV2 onChange={handelTextValueChange} value={testValue} placeholder={"Введите показатели"} />
              </CheckListDataCell>
              <CheckListDataCell last={true}>
                <CheckListTextFieldV2 onChange={handelTextValueChange} value={testValue} placeholder={"Пропишите описание"} />
              </CheckListDataCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CheckListTable;



// <TextField
//   placeholder={"Write your text"}
//   variant="standard"
//   sx={{
//     width: "250px",
//     "& legend": { display: "none" },
//     "& fieldset": { top: 0 },
//     border: "none",
//   }}
//   inputProps={{
//     underline: {
//       "&&&:before": {
//         borderBottom: "none",
//       },
//       "&&:after": {
//         borderBottom: "none",
//       },
//     },
//   }}
//   id="outlined-multiline-flexible"
//   multiline
//   maxRows={4}
// >