import React, { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import downArrow from "../../../assets/icons/down-arrow.svg";

import classes from "./selectButton.module.css";

const SelectButton = ({ text }) => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const formStyles = {
    width: "200px",
    height: "44px",
    display: "flex",
    alignItems: "center",
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
    // <button className={classes.button}>
    //   <p>{text}</p>
    //   <img src={downArrow} alt="" />
    // </button>
    <FormControl sx={formStyles}>
      {name === "" ? (
        <InputLabel style={inputLabelStyles} id="demo-simple-select-label">
          {text}
        </InputLabel>
      ) : null}
      <Select
        sx={selectStyles}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={name}
        onChange={handleChange}
        IconComponent={() => (
          <img style={{ marginRight: "15px" }} src={downArrow} alt="icon" />
        )}
      >
        <MenuItem value={10}>Ташболот И.Р</MenuItem>
        <MenuItem value={20}>Ташболот И.Р</MenuItem>
        <MenuItem value={30}>Ташболот И.Р</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectButton;
