// modules
import React, { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

// assets
import { whiteDownArrow } from '../../../../assets/icons/icons';

// constants
import {ROLES} from "../../../../utils/consts/constants";

// styles
import classes from './addUserButton.module.css';
import './style.scss';

const inputLabelStyles = {
  fontFamily: 'SF Pro Display',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '19px',
  color: 'white',
  marginLeft: '10px',
  top: '50%',
  transform: 'translate(0,-50%)',
};

const selectStyles = {
  width: '238px',
  height: '44px',
  background: '#5cc78d',
  borderRadius: '4px',
  borderStyle: 'none',
  fontSize: '18px',
  fontWeight: '600',
  cursor: 'pointer',
  color: 'white',
  '& legend': { display: 'none' },
  '& fieldset': { top: 0 },
};

const formRadioStyles = {
  fontFamily: 'SF Pro Display',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '19px',
  color: '#4C464B',
};

const AddUserButton = ({ text }) => {
  const [role, setRole] = useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
    console.log(event.target.value);
    console.log("OPEN MODAL");
  };


  const options = [
    { option: 'Администратор', value: ROLES.ADMIN },
    { option: 'Супер администратор', value: ROLES.SUPERADMIN },
    { option: 'Врач', value: ROLES.DOCTOR },
  ];


  return (
    <FormControl >
      {
        role === '' ? <InputLabel style={inputLabelStyles} id="demo-simple-select-label">
          <span className={classes.inputLabel}>{text}</span>
        </InputLabel> : null
      }

      <Select
        sx={selectStyles}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
          background: '#F1F0F3',
        }}
        value={role}
        onChange={handleChange}
      >
        {
          options.map((item, index) => (
            <MenuItem key={index} value={item.value}>{item.option}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};

export default AddUserButton;


/*

 <Select
        sx={selectStyles}
        id="demo-simple-select"
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
          background: '#F1F0F3',
        }}
        onChange={(e) => console.log(e)}
      >
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          sx={{
            width: '230px',
            height: '100%',
            marginLeft: '10px;',
          }}
        >
          {options.map((item, index) => (
            <MenuItem key={index}>
              <FormControlLabel
                sx={formRadioStyles}
                value={item.option}
                control={<Radio color="success" />}
                label={item.option}
              />
            </MenuItem>
          ))}
        </RadioGroup>
      </Select>
 */