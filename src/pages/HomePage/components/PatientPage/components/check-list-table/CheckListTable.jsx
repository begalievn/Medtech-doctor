// modules
import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextareaAutosize,
  TextField,
} from "@mui/material";

// components
import CheckListDataCell from "../check-list-data-cell/CheckListDataCell";

// styles
import classes from "./checkListTable.module.scss";
import "./checkListTable.scss";

// .css-8q2m5j-MuiInputBase-root-MuiInput-root:before
const CheckListTable = () => {
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
              <CheckListDataCell first={true}>Data</CheckListDataCell>
              <CheckListDataCell>Data</CheckListDataCell>
              <CheckListDataCell>Data</CheckListDataCell>
              <CheckListDataCell last={true}>
                Data data data data data data
              </CheckListDataCell>
            </TableRow>
            <TableRow sx={{ marginBottom: "10px" }}>
              <CheckListDataCell first={true}>Data</CheckListDataCell>
              <CheckListDataCell>
                <textarea placeholder={"Введите показатели"}></textarea>
              </CheckListDataCell>
              <CheckListDataCell>
                <TextField
                  placeholder={"Write your text"}
                  variant="standard"
                  sx={{
                    width: "250px",
                    "& legend": { display: "none" },
                    "& fieldset": { top: 0 },
                    border: "none",
                    // "& .css-8q2m5j-MuiInputBase-root-MuiInput-root:before": {
                    //   borderBottom: "none",
                    // },
                  }}
                  inputProps={{
                    underline: {
                      "&&&:before": {
                        borderBottom: "none",
                      },
                      "&&:after": {
                        borderBottom: "none",
                      },
                    },
                  }}
                  id="outlined-multiline-flexible"
                  multiline
                  maxRows={4}
                >
                  {"dataaaaa"}
                </TextField>
              </CheckListDataCell>
              <CheckListDataCell last={true}>
                Data data data data data data
              </CheckListDataCell>
            </TableRow>
            <TableRow>
              <CheckListDataCell first={true}>Data</CheckListDataCell>
              <CheckListDataCell>
                <input
                  className={classes.input_field}
                  placeholder={"Write your data"}
                />
              </CheckListDataCell>
              <CheckListDataCell>
                <TextField
                  variant="standard"
                  sx={{
                    width: "250px",
                    "& legend": { display: "none" },
                    "& fieldset": { top: 0 },
                    border: "none",
                  }}
                  inputProps={{
                    underline: {
                      "&&&:before": {
                        borderBottom: "none",
                      },
                      "&&:after": {
                        borderBottom: "none",
                      },
                    },
                  }}
                  id="outlined-multiline-flexible"
                  multiline
                  maxRows={4}
                />
              </CheckListDataCell>
              <CheckListDataCell last={true}>
                <TextField
                  variant="standard"
                  sx={{
                    width: "250px",
                    "& legend": { display: "none" },
                    "& fieldset": { top: 0 },
                  }}
                  id="outlined-multiline-flexible"
                  multiline
                  maxRows={4}
                />
              </CheckListDataCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CheckListTable;
