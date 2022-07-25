import React from "react";
import TableCell from "@mui/material/TableCell";

const TableDataCell = ({ children }) => {
  const style = {
    textAlign: "center",
    fontWeight: "500",
    fontSize: "16px",
  };

  return <TableCell sx={style}>{children}</TableCell>;
};

export default TableDataCell;
