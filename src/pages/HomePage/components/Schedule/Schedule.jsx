import React, { useState } from "react";
import SelectButton from "../../../../components/useful/select-button/SelectButton";

import { calendarBackground } from "../../../../assets/images/images";

import CalendarComp from "./components/calendar/CalendarComp";
import TimeScheduleButton from "./components/time-schedule-button/TimeScheduleButton";
import classes from "./schedule.module.css";
import PageContainer from "../../../../components/Home/body/page-container/PageContainer";
import { HomeBodyTable } from "../../../../components/Home/body/home-table/HomeBodyTable";
import UserSearch from "../../../../components/Home/body/user-search/UserSearch";
import ScheduleTable from "./components/schedule-table/ScheduleTable";
import ModalAppointment from "./components/modal-appointment/ModalAppointment";
import MakeAppointmentModal from "./components/make-appointment-modal/MakeAppointmentModal";

function Schedule() {
  const [openAppointmentModal, setOpenAppointmentModal] = useState(false);
  const [openMakeAppointmentModal, setOpenMakeAppointmentModal] =
    useState(false);
  const [appointmentModalData, setAppointmentModalData] = useState({});

  // console.log("Schedule", appointmentModalData);
  const handleAppointmentClick = (data) => {
    setOpenAppointmentModal(true);
  };

  const handeMakeAppointmentClick = () => {
    setOpenMakeAppointmentModal(true);
  };

  return (
    <div className={classes.schedule}>
      <div className={classes.list_section}>
        <h3>Список запланированных встреч</h3>
        <div className={classes.options}>
          <div className={classes.roles_options}>
            <UserSearch />
            <SelectButton text="Врач" />
          </div>
          <div className={classes.time_option}>
            <TimeScheduleButton
              onClick={handeMakeAppointmentClick}
              text="Записать на прием"
            />
          </div>
        </div>
        <div className={classes.schedule_table}>
          <ScheduleTable
            setOpenAppointmentModal={setOpenAppointmentModal}
            setAppointmentModalData={setAppointmentModalData}
          />
        </div>
      </div>
      <ModalAppointment
        appointmentModalData={appointmentModalData}
        openAppointmentModal={openAppointmentModal}
        setOpenAppointmentModal={setOpenAppointmentModal}
      />
      <MakeAppointmentModal
        openMakeAppointmentModal={openMakeAppointmentModal}
        setOpenMakeAppointmentModal={setOpenMakeAppointmentModal}
      />
      <div className={classes.calendar_section}>
        <div className={classes.calendar_container}>
          <CalendarComp />
        </div>
        <div className={classes.calendar_image_container}>
          <p>Выберите врача</p>
          <img src={calendarBackground} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Schedule;
