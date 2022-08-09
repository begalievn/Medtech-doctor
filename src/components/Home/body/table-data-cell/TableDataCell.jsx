// modules
import React from "react";
import TableCell from "@mui/material/TableCell";


const TableDataCell = ({ children }) => {
  const style = {
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#3B393C",
    borderColor: "#f2f5f4",
  };

  return <TableCell sx={style}>{children}</TableCell>;
};

export default TableDataCell;
