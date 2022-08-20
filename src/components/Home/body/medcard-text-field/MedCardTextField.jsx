// modules
import React from "react";

// components
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

// constants
import { inputTypes } from "../../../../utils/consts/constants";

// assets
import downArrow from "../../../../assets/icons/down-arrow.svg";

// styles
import classes from "./medCardTextField.module.scss";
import './style.scss';

const MedCardTextField = ({
  placeholder,
  label,
  inputType,
  onChange,
  value,
  doctorsNameEmail,
  ...props
}) => {
  if (inputType === inputTypes.SELECT) {
    const formStyles = {
      width: "280px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      background: "#F7F3F7",
      borderStyle: "none",
      "& legend": { display: "none" },
      "& fieldset": { top: 0 },
    };

    const inputLabelStyles = {
      fontFamily: "SF Pro Display",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19px",
      background: "#F7F3F7",
      borderStyle: "none",
      color: "#4C464B",
      marginLeft: "10px",
      top: "50%",
      transform: "translate(0,-50%)",
    };

    const selectStyles = {
      width: "280px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      // background: "#F1F0F3",
      "&:hover": { cursor: "pointer" },
    };

    return (
      <div className="med_card_text_field">
        <p className={classes.label}>{label}</p>
        <FormControl sx={formStyles}>
          {value === "" ? (
            <InputLabel style={inputLabelStyles} id="demo-simple-select-label">
              {placeholder}
            </InputLabel>
          ) : null}
          <Select
            sx={selectStyles}
            value={value}
            onChange={onChange}
            name={"doctor"}
            IconComponent={() => (
              <img style={{ marginRight: "15px" }} src={downArrow} alt="icon" />
            )}
            {...props}
          >
            {doctorsNameEmail.map((doctor, index) => (
              <MenuItem key={index} value={doctor.email}>
                {doctor.fullName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }

  return (
    <div>
      <p className={classes.label}>{label}</p>
      <input
        className={classes.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default MedCardTextField;

// Reserves
// if(inputType === inputTypes.SELECT) {
//   console.log("doctorsNameEmail: ", doctorsNameEmail);
//   return (
//     <div>
//       <p className={classes.label}>{label}</p>
//       <select className={classes.input} value={value} onChange={onChange} placeholder={placeholder} {...props} >
//         {
//           doctorsNameEmail.map((doctor, index) => (
//             <option key={index} value={doctor.email}>{doctor.fullName}</option>
//           ))
//         }
//       </select>
//     </div>
//   )
// }
