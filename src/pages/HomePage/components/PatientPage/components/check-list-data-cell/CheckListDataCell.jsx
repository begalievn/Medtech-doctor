import React from "react";
import TableCell from "@mui/material/TableCell";

const CheckListDataCell = ({ children, first, last }) => {
  const style = {
    textAlign: "start",
    fontWeight: "500",
    fontSize: "16px",
    marginBottom: "10px",
    borderTopLeftRadius: first ? "8px" : "",
    borderBottomLeftRadius: first ? "8px" : "",
    borderTopRightRadius: last ? "8px" : "",
    borderBottomRightRadius: last ? "8px" : "",
    borderCollapse: "collapse",
    borderBottom: "0",
    background: "#F7F3F7",
  };

  return <TableCell sx={style}>{children}</TableCell>;
};

export default CheckListDataCell;
