// modules
import React, {useEffect, useState} from "react";
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

// utils
import {makeNumberWithZeros} from "../../../../../../utils/helpers/MakeNumberWithZeros";

// styles
import classes from "./checkListTable.module.scss";


const CheckListTable = ({ checkList, setCheckList, editable }) => {

  console.log("checklistTable: ", checkList);

  const handelTextValueChange = (e) => {
    const { name, value } = e.target;
    const [key, answerId] = name.split(" ");

    setCheckList(checkList.map((item) => {
      if(+answerId === item.id) {
        return {...item, [key]: value};
      }else {
        return item;
      }
    }));
  }

  return (
    <div className={classes.container}>
      <TableContainer>
        <Table
          sx={{
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
            {
              checkList.slice().sort((a, b) => a.id - b.id).map((item) => (
                <TableRow key={item?.id} sx={{ marginBottom: "10px" }}>
                  <CheckListDataCell first={true}>{makeNumberWithZeros(item?.id)}</CheckListDataCell>
                  <CheckListDataCell><span className={classes.question_text}>{item?.question}</span></CheckListDataCell>
                  <CheckListDataCell>
                    <CheckListTextFieldV2
                      onChange={handelTextValueChange}
                      value={item?.indicators}
                      name={`indicators ${item?.id}`}
                      placeholder={"Введите показатели"}
                      disabled={!editable}
                    />
                  </CheckListDataCell>
                  <CheckListDataCell last={true}>
                    <CheckListTextFieldV2
                      onChange={handelTextValueChange}
                      value={item?.description}
                      name={`description ${item?.id}`}
                      placeholder={"Пропишите описание"}
                      disabled={!editable}
                    />
                  </CheckListDataCell>
                </TableRow>
              ))
            }
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