import React from "react";

import classes from "./makeAppointmentModal.module.scss";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "371px",
  background: "white",
  boxShadow: 24,
  borderRadius: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const MakeAppointmentModal = ({
  openMakeAppointmentModal,
  setOpenMakeAppointmentModal,
}) => {
  const handleClose = () => {
    setOpenMakeAppointmentModal(false);
  };

  return (
    <div>
      <Modal
        open={openMakeAppointmentModal}
        onClose={handleClose}
        disableAutoFocus={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <div className={classes.close} onClick={handleClose}></div>
          <div className={classes.content}>
            <h3>Запись на прием</h3>
            <div className={classes.date_time}>
              <p>Дата и время встречи</p>
              <div>
                <span>{"data"}</span>
                <span>{"data"}</span>
              </div>
            </div>
            <div className={classes.patient_input}>
              <p></p>
              <input placeholder={"Выбрать пациента"} />
            </div>
            <div className={classes.appointment_button}>
              <button>Записать</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default MakeAppointmentModal;
