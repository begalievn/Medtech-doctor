// modules
import React from 'react';
import {CircularProgress} from "@mui/material";
import {Box} from "@mui/system";

const boxStyles = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const Loader = () => {
  return (
    <Box sx={{boxStyles}}>
      <CircularProgress sx={{color: "#5CC78D"}} />
    </Box>
  );
};

export default Loader;