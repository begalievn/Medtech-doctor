import { Button, createTheme, ThemeProvider } from '@mui/material';
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5CC78D',
    },
  },
});

const AuthButton = ({ text }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        type="submit"
        variant="contained"
        sx={{
          '&:hover': {
            backgroundColor: '#5CC78D',
          },
          width: '100%',
          height: '50px',
          fontSize: '16px',
          textTransform: 'none',
          backgroundColor: '#A8A8A8',
          color: '#FCFCFC',
        }}
        disableElevation
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};

export default AuthButton;
