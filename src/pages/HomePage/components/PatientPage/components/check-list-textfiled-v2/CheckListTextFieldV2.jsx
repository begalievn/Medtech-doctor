// modules
import React from 'react';
import {TextField} from "@mui/material";

// styles
import './style.scss';

const CheckListTextFieldV2 = ({value, onChange, ...props}) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
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
      {...props}
    >
    </TextField>
  );
};

export default CheckListTextFieldV2;