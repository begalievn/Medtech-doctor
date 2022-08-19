// modules
import React, { useEffect, useState } from "react";
import SelectButton from "../../../../components/useful/select-button/SelectButton";

// components
import CalendarComp from "./components/calendar/CalendarComp";
import TimeScheduleButton from "./components/time-schedule-button/TimeScheduleButton";
import UserSearch from "../../../../components/Home/body/user-search/UserSearch";
import ScheduleTable from "./components/schedule-table/ScheduleTable";
import ModalAppointment from "./components/modal-appointment/ModalAppointment";
import MakeAppointmentModal from "./components/make-appointment-modal/MakeAppointmentModal";
import Loader from "../../../../components/useful/loader/Loader";

// rtk-queries
import {
  useGetAllScheduleForTodayQuery,
  useLazySearchSchedulesByDoctorNameQuery,
} from "../../../../store/features/schedule/scheduleQuery";
import { useGetAllDoctorsQuery } from "../../../../store/features/doctors/doctorsQuery";

// assets
import { calendarBackground } from "../../../../assets/images/images";

// styles
import classes from "./schedule.module.css";
import useDebounce from "../../../../hooks/useDebounce";

function Schedule() {
  const [openAppointmentModal, setOpenAppointmentModal] = useState(false);
  const [openMakeAppointmentModal, setOpenMakeAppointmentModal] =
    useState(false);
  const [appointmentModalData, setAppointmentModalData] = useState({});
  const [doctorId, setDoctorId] = useState();
  const [searchedDoctor, setSearchedDoctor] = useState("");

  const { data: todaySchedules, isLoading: todayScheduleLoading } =
    useGetAllScheduleForTodayQuery("");

  const { data: doctorsList, isLoading: doctorsListLoading } =
    useGetAllDoctorsQuery("");

  const [searchSchedulesByDoctor, { data: searchedScheduleList = [] }] =
    useLazySearchSchedulesByDoctorNameQuery();

  const debouncedValue = useDebounce(searchedDoctor, 400);

  const handleMakeAppointmentClick = () => {
    setOpenMakeAppointmentModal(true);
  };

  const handleDoctorSelect = (e) => {
    const { value } = e.target;
    setDoctorId(value);
  };

  const handleSearchDoctor = (e) => {
    const { value } = e.target;
    setSearchedDoctor(value);
  };

  useEffect(() => {
    if (searchedDoctor.length > 0) {
      searchSchedulesByDoctor(debouncedValue);
    }
  }, [debouncedValue]);

  console.log("searched schedule list", searchedScheduleList);

  return (
    <div className={classes.schedule}>
      <div className={classes.list_section}>
        <h3>Список запланированных встреч</h3>
        <div className={classes.options}>
          <div className={classes.roles_options}>
            <UserSearch value={searchedDoctor} onChange={handleSearchDoctor} />
            {doctorsListLoading ? null : (
              <SelectButton
                value={doctorId}
                onChange={handleDoctorSelect}
                doctorList={doctorsList}
                text="Врач"
              />
            )}
          </div>
          <div className={classes.time_option}>
            <TimeScheduleButton
              onClick={handleMakeAppointmentClick}
              text="Записать на прием"
            />
          </div>
        </div>
        <div className={classes.schedule_table}>
          {searchedDoctor.length > 0 ? (
            <ScheduleTable
              scheduleData={searchedScheduleList}
              setOpenAppointmentModal={setOpenAppointmentModal}
              setAppointmentModalData={setAppointmentModalData}
            />
          ) : todayScheduleLoading ? (
            <Loader />
          ) : (
            <ScheduleTable
              scheduleData={todaySchedules}
              setOpenAppointmentModal={setOpenAppointmentModal}
              setAppointmentModalData={setAppointmentModalData}
            />
          )}
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
