import React from "react";
import { Modal, Box } from "@mui/material";

import classes from "./modalAppointment.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "460px",
  height: "428px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "white",
  border: "1px solid #F1F0F3",
  borderRadius: "10px",
  boxShadow: 24,
  padding: 4,
};

const ModalAppointment = ({
  openAppointmentModal,
  setOpenAppointmentModal,
  appointmentModalData,
}) => {
  const handleClose = () => {
    setOpenAppointmentModal(false);
  };

  return (
    <div>
      <Modal
        open={openAppointmentModal}
        onClose={handleClose}
        disableAutoFocus={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes.close} onClick={handleClose}></div>
          <div className={classes.title}>
            <p>Причины встречи</p>
            <h4>{"Плановый осмотр пациентки"}</h4>
          </div>
          <div className={classes.content}>
            <div className={classes.content_row}>
              <span className={classes.row_name}>{"Врач"}</span>
              <span className={classes.row_data}>
                {appointmentModalData.doctorNameSurname}
              </span>
            </div>
            <div className={classes.content_row}>
              <span className={classes.row_name}>{"Номер телефона"}</span>
              <span className={classes.row_data}>
                {appointmentModalData?.phoneNumber || "нет"}
              </span>
            </div>
            <div className={classes.content_row}>
              <span className={classes.row_name}>{"Пациент"}</span>
              <span className={classes.row_data}>
                {appointmentModalData.patientNameSurname}
              </span>
            </div>
            <div className={classes.content_row}>
              <span className={classes.row_name}>{"Номер телефона"}</span>
              <span className={classes.row_data}>
                {appointmentModalData?.patientNumber || "нет"}
              </span>
            </div>
            <div className={classes.content_row}>
              <span className={classes.row_name}>
                {"Дата и время посещения"}
              </span>
              <span className={classes.row_data}>
                <span>{appointmentModalData.date}</span>
                <span>{appointmentModalData.time}</span>
              </span>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAppointment;
