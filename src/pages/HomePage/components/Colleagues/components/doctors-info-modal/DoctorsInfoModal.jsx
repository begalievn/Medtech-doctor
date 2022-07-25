import React from "react";

import classes from "./doctorsInfoModal.module.scss";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";

const style = {};

const DoctorsInfoModal = () => {
  return (
    <div className={classes.container}>
      <Modal disableAutoFocus={true}>
        <Box sx={style}>Doctors Modal</Box>
      </Modal>
    </div>
  );
};

export default DoctorsInfoModal;
