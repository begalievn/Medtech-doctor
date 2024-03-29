import React from "react";
import { TextField } from "@mui/material";

function TextFieldComponent({ styles, inputRef, value, onChange }) {
  return (
    <TextField
      inputRef={inputRef}
      fullWidth
      value={value}
      onChange={onChange}
      sx={{
        "& legend": { display: "none" },
        "& fieldset": { top: 0 },
        ...styles,
      }}
      InputProps={{
        autoComplete: "off",
        style: {
          height: "50px",
          backgroundColor: "#F7F3F7",
        },
      }}
    />
  );
}

export default TextFieldComponent;
