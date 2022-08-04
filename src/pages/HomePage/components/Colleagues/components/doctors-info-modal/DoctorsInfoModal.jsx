import React from "react";

import classes from "./doctorsInfoModal.module.scss";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { doctorsAva } from "../../../../../../assets/images/images";
import InfoTextField from "../../../../../../components/Home/body/info-text-field/InfoTextField";

const style = {
  width: "700px",
  height: "750px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
  borderRadius: "16px",
  boxShadow: 24,
  p: 5,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const DoctorsInfoModal = ({ isModalOpen, setModalOpen }) => {
  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className={classes.container}>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        disableAutoFocus={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes.close} onClick={handleClose}></div>
          <div className={classes.title}>
            <h3>Страница пользователя</h3>
          </div>
          <div className={classes.photo}>
            <div className={classes.avatar}>
              <img src={doctorsAva} alt="doctors ava" />
            </div>
          </div>
          <div className={classes.doctor_info}>
            <div className={classes.row}>
              <InfoTextField label={"Фамилия"} text={"Беглиев"} />
              <InfoTextField label={"Имя"} text={"Нурсултан"} />
            </div>
            <div className={classes.row}>
              <InfoTextField label={"Отчество"} text={"Айбекович"} />
              <InfoTextField
                label={"Количество пациентов"}
                text={`${"data"} пациентов`}
              />
            </div>
            <div className={classes.row}>
              <InfoTextField
                label={"Номер телефона"}
                text={"+996 553 404 406"}
              />
              <InfoTextField label={"Email"} text={"begaliev.info@gmail.com"} />
            </div>
          </div>
          <div className={classes.working_days}>
            <p className={classes.text}>Рабочие дни недели</p>
            <div className={classes.days}>
              <div className={classes.day}>
                <span>Пн</span>
              </div>
            </div>
          </div>
          <div className={classes.interview_time}>
            <p className={classes.text}>Время интервью</p>
            <div className={classes.time_row}>
              <div className={classes.time_block}>
                <span>С</span>
                <div className={classes.time}>
                  <span>{"data"}</span>
                </div>
              </div>
              <div className={classes.time_block}>
                <span>До</span>
                <div className={classes.time}>
                  <span>{"data"}</span>
                </div>
              </div>
            </div>

            <div className={classes.time_row}>
              <div className={classes.time_block}>
                <span>С</span>
                <div className={classes.time}>
                  <span>{"data"}</span>
                </div>
              </div>
              <div className={classes.time_block}>
                <span>До</span>
                <div className={classes.time}>
                  <span>{"data"}</span>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DoctorsInfoModal;
