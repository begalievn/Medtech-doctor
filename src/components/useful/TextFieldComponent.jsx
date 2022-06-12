import React from 'react';
import { TextField } from '@mui/material';

function TextFieldComponent({ errors, styles, ...field }) {
  return (
    <TextField
      {...field}
      fullWidth
      sx={styles}
      error={!!errors.login?.message}
      helperText={errors.login?.message}
      InputProps={{
        autoComplete: 'off',
        style: {
          height: '50px',
          backgroundColor: '#F7F3F7',
        },
      }}
    />
  );
}

export default TextFieldComponent;
