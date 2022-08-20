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
import {useGetDoctorProfileQuery} from "../../../../../../store/features/doctors/doctorsQuery";
import {daysOfWeek} from "../../../../../../utils/consts/homeConsts";

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
  const [schedule, setSchedule] = useState({});
  const [workingDays, setWorkingDays] = useState([]);
  const [hours, setHours] = useState({});

  const { data: doctorProfile, isLoading: doctorProfileLoading } = useGetDoctorProfileQuery(doctorData.doctorId);

  console.log("Doctor Profile", doctorProfile);

  console.log("schedule", doctorInfo.schedule);

  const handleWeekDayClick = (e) => {
    e.stopPropagation();
    console.log(e.target.id)
    const hoursObj = doctorProfile.schedule[e.target.id];
    setHours(hoursObj);
  }

  useEffect(() => {
    if(doctorProfile) {
      setDoctorInfo(doctorProfile);
      setSchedule(doctorProfile.schedule);
      const workDaysArr = Object.keys(doctorProfile.schedule).filter((item) => doctorProfile.schedule[item].from !== "00:00")
      setWorkingDays(workDaysArr);
    }
  }, [doctorProfile, doctorProfileLoading])

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
          {(doctorProfileLoading && doctorInfo) ? (
            <Loader />
          ) : (
            <>
              <div className={classes.close} onClick={handleClose}></div>
              <div className={classes.title}>
                <h3>Страница доктора</h3>
              </div>
              <div className={classes.photo}>
                <div className={classes.avatar}>
                  <img src={doctorInfo?.imageUrl || avatarPlaceholder} alt="doctors ava" />
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
                    text={`${doctorInfo?.numberOfPatients} пациента`}
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
                  {
                    Object.keys(schedule).map((item, index) => (
                      <div className={workingDays.includes(item) ? [classes.day, classes.active].join(" ") : classes.day}  id={item} onClick={handleWeekDayClick}>
                        <span id={item}>{daysOfWeek[item]}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className={classes.interview_time}>
                <p className={classes.text}>Время интервью</p>
                <div className={classes.time_row}>
                  <div className={classes.time_block}>
                    <span>С</span>
                    <div className={classes.time}>
                      <span>{hours?.from}</span>
                    </div>
                  </div>
                  <div className={classes.time_block}>
                    <span>До</span>
                    <div className={classes.time}>
                      <span>{hours?.till}</span>
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
