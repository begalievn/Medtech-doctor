import React, { useState } from 'react';
import { whiteDownArrow } from '../../../../assets/icons/icons';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

import classes from './addUserButton.module.css';

const AddUserButton = ({ text }) => {
  const [role, setRole] = useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

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
    '&:hover': { cursor: 'pointer' },
  };

  const formRadioStyles = {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '19px',
    color: '#4C464B',
  };

  const options = [
    { option: 'Администратор' },
    { option: 'Супер администратор' },
    { option: 'Пациент' },
    { option: 'Врач' },
  ];

  return (
    // <button className={classes.button}>
    //   <p>{text}</p>
    //   <img src={whiteDownArrow} alt="icon" />
    // </button>
    <FormControl>
      <InputLabel style={inputLabelStyles} id="demo-simple-select-label">
        {text}
      </InputLabel>

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
        // IconComponent={() => (
        //   <img
        //     style={{ marginRight: '15px' }}
        //     src={whiteDownArrow}
        //     alt="icon"
        //   />
        // )}
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
    </FormControl>
  );
};

export default AddUserButton;
