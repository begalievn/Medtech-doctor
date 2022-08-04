import { Button, createTheme, ThemeProvider } from "@mui/material";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5CC78D",
    },
  },
});

const AuthButton = ({ text, backgroundColor, disabled }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        disabled={disabled}
        type="submit"
        variant="contained"
        sx={{
          "&:hover": {
            backgroundColor: "#5CC78D",
          },
          "&:disabled": {
            background: "#A8A8A8",
            color: "#fff",
          },
          width: "100%",
          fontWeight: "700",
          height: "50px",
          fontSize: "16px",
          textTransform: "none",
          backgroundColor: "#5CC78D",
          color: "#FCFCFC",
        }}
        disableElevation
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};

export default AuthButton;
