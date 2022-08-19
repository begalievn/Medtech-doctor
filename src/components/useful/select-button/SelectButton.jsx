import React, { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import downArrow from "../../../assets/icons/down-arrow.svg";

import classes from "./selectButton.module.css";

const SelectButton = ({ text, doctorList, value, onChange }) => {

  const formStyles = {
    width: "200px",
    height: "44px",
    display: "flex",
    alignItems: "center",
    '& legend': { display: 'none' },
    '& fieldset': { top: 0 },
  };

  const inputLabelStyles = {
    fontFamily: "SF Pro Display",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#4C464B",
    marginLeft: "10px",
    top: "50%",
    transform: "translate(0,-50%)",
  };

  const selectStyles = {
    width: "200px",
    height: "44px",
    display: "flex",
    alignItems: "center",
    background: "#F1F0F3",
    "&:hover": { cursor: "pointer" },
  };

  return (
    <FormControl sx={formStyles}>
      {value === "" ? (
        <InputLabel style={inputLabelStyles} id="demo-simple-select-label">
          {text}
        </InputLabel>
      ) : null}
      <Select
        sx={selectStyles}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        defaultValue={''}
        displayEmpty={true}
        onChange={onChange}
        IconComponent={() => (
          <img style={{ marginRight: "15px" }} src={downArrow} alt="icon" />
        )}
      >
        <MenuItem sx={{display: "none"}} value={''}>{text}</MenuItem>
        {
          doctorList.map((item, index) => (
            <MenuItem key={index} value={item?.doctorId}>{item?.fio}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};

export default SelectButton;
