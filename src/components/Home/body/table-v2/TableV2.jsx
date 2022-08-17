import React from "react";

import classes from "./tableV2.module.scss";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableDataCell from "../table-data-cell/TableDataCell";
import { makeNumberWithZeros } from "../../../../utils/helpers/MakeNumberWithZeros";

const TableV2 = ({ tableHead, data }) => {
  return (
    <div className={classes.container}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                borderBottom: "0.5px solid black",
                height: "50px",
              }}
            >
              <th>№</th>
              {tableHead.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ "&:before": {content: `"-"`, lineHeight: "10px", display: 'block', color: 'transparent'}}}>
            {data.map((item, index) => (
              <TableRow
                key={index}
                sx={{
                  background: index % 2 !== 0 ? "" : "#F8F8F8",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <TableDataCell>{makeNumberWithZeros(index + 1)}</TableDataCell>
                <TableDataCell>{item.patientNameSurname}</TableDataCell>
                <TableDataCell>{item.patientPhoneNumber}</TableDataCell>
                <TableDataCell>{item.patientEmail}</TableDataCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableV2;
