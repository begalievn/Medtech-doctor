// modules
import React, { useEffect, useState } from "react";

// components
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import InfoTextField from "../../../../../../components/Home/body/info-text-field/InfoTextField";
import Loader from "../../../../../../components/useful/loader/Loader";

// rtk-queries
import { useGetAllUsersQuery } from "../../../../../../store/features/user/userApi";

// assets
import { avatarPlaceholder } from "../../../../../../assets/images/images";

// styles
import classes from "./doctorsInfoModal.module.scss";

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

const DoctorsInfoModal = ({ isModalOpen, setModalOpen, doctorData }) => {
  const [doctorInfo, setDoctorInfo] = useState({});

  const { data: users, isLoading: usersLoading } = useGetAllUsersQuery("");

  useEffect(() => {
    setDoctorInfo(users);
    if (users) {
      setDoctorInfo(users.filter((item) => item.email === doctorData.email)[0]);
    }
  }, [usersLoading, isModalOpen]);


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
          {usersLoading ? (
            <Loader />
          ) : (
            <>
              <div className={classes.close} onClick={handleClose}></div>
              <div className={classes.title}>
                <h3>Страница пользователя</h3>
              </div>
              <div className={classes.photo}>
                <div className={classes.avatar}>
                  <img src={avatarPlaceholder} alt="doctors ava" />
                </div>
              </div>
              <div className={classes.doctor_info}>
                <div className={classes.row}>
                  <InfoTextField label={"Фамилия"} text={doctorInfo?.lastName} />
                  <InfoTextField label={"Имя"} text={doctorInfo?.firstName} />
                </div>
                <div className={classes.row}>
                  <InfoTextField label={"Отчество"} text={doctorInfo?.middleName} />
                  <InfoTextField
                    label={"Количество пациентов"}
                    text={`${"data"} пациентов`}
                  />
                </div>
                <div className={classes.row}>
                  <InfoTextField
                    label={"Номер телефона"}
                    text={doctorInfo?.phoneNumber}
                  />
                  <InfoTextField
                    label={"Email"}
                    text={doctorInfo?.email}
                  />
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
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default DoctorsInfoModal;
