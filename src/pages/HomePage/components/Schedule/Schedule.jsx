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
  useLazyGetAllSchedulesByDoctorIdYearMonthQuery,
  useLazyGetDoctorScheduleByDateQuery,
  useLazyGetResultByDoctorDateTimeQuery,
  useLazySearchSchedulesByDoctorNameQuery,
} from "../../../../store/features/schedule/scheduleQuery";
import { useGetAllDoctorsQuery } from "../../../../store/features/doctors/doctorsQuery";

// hooks
import useDebounce from "../../../../hooks/useDebounce";

// assets
import { calendarBackground } from "../../../../assets/images/images";

// styles
import classes from "./schedule.module.css";
import Hours from "./components/hours/Hours";

function Schedule() {
  const [openAppointmentModal, setOpenAppointmentModal] = useState(false);
  const [openMakeAppointmentModal, setOpenMakeAppointmentModal] = useState(false);
  const [appointmentModalData, setAppointmentModalData] = useState({});
  const [doctorId, setDoctorId] = useState();
  const [searchedDoctor, setSearchedDoctor] = useState("");
  const [newDate, setNewDate] = useState(new Date());



  const { data: todaySchedules, isLoading: todayScheduleLoading } =
    useGetAllScheduleForTodayQuery("");

  const { data: doctorsList, isLoading: doctorsListLoading } =
    useGetAllDoctorsQuery("");

  const [searchSchedulesByDoctor, { data: searchedScheduleList = [] }] =
    useLazySearchSchedulesByDoctorNameQuery();

  const debouncedValue = useDebounce(searchedDoctor, 400);

  const [getAllSchedulesByDoctorIdYearMonth, { data : allSchedulesByDoctorIdYearMonth}] = useLazyGetAllSchedulesByDoctorIdYearMonthQuery();

  const [getResultByDoctorDateTime, { data: resultByDoctorDateTime }] = useLazyGetResultByDoctorDateTimeQuery();

  const [getDoctorScheduleByDate, {data: doctorScheduleByDate}] = useLazyGetDoctorScheduleByDateQuery();

  console.log("doctorScheduleByDate: ", doctorScheduleByDate);


  const handleDoctorSelect = (e) => {
    const { value } = e.target;
    setDoctorId(value);
  };

  const handleSearchDoctor = (e) => {
    const { value } = e.target;
    setSearchedDoctor(value);
  };

  useEffect(() => {
    if(doctorId) {
      const date = `${newDate.getFullYear()}-${newDate.getMonth() < 10 ? "0" + newDate.getMonth() : newDate.getMonth()}-${newDate.getDay() < 10 ? "0" + newDate.getDay() : newDate.getDay()}`;
      // const date = '2022-08-28';
      getDoctorScheduleByDate({date, doctorId});
    }
  }, [doctorId, newDate])

  useEffect(() => {
    if(doctorId) {
      const localDate = `${newDate.getFullYear()}-${newDate.getMonth() < 10 ? "0" + newDate.getMonth() : newDate.getMonth()}-${newDate.getDay() < 10 ? "0" + newDate.getDay() : newDate.getDay()}`;
      const localTime = '09:00';
      // const localDate = '2022-08-28';
      // const localTime = '09:00';
      getResultByDoctorDateTime({doctorId, localDate, localTime});
    }
  }, [doctorId])

  useEffect(() => {
    if(doctorId) {
      const year = newDate.getFullYear();
      const month = newDate.getMonth();
      getAllSchedulesByDoctorIdYearMonth({ doctorId, year, month });
    }
  }, [doctorId])

  useEffect(() => {
    if (searchedDoctor.length > 0) {
      searchSchedulesByDoctor(debouncedValue);
    }
  }, [debouncedValue]);

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
      <div className={classes.calendar_section}>
        <div className={classes.calendar_container}>
          <CalendarComp newData={newDate} setNewData={setNewDate} />
        </div>
        <div className={classes.calendar_hoursBlock}>
          <div className={classes.calendar_header}>
            <h3>Часы приема</h3>
            <p>Свободное время</p>
            <p>Занятое время</p>
          </div>
          <Hours />
        </div>
        <div className={classes.calendar_image_container}>
          <p>Выберите врача</p>
          <img src={calendarBackground} alt="" />
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
    </div>
  );
}

export default Schedule;


{/*<div className={classes.time_option}>*/}
{/*  <TimeScheduleButton*/}
{/*    onClick={handleMakeAppointmentClick}*/}
{/*    text="Записать на прием"*/}
{/*  />*/}
{/*</div>*/}