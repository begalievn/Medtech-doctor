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
import {
  useGetAllDoctorsQuery,
  useLazySearchDoctorsQuery,
} from "../../../../store/features/doctors/doctorsQuery";

// hooks
import useDebounce from "../../../../hooks/useDebounce";

// assets
import { calendarBackground } from "../../../../assets/images/images";

// styles
import classes from "./schedule.module.css";
import Hours from "./components/hours/Hours";
import { getYearMonthDay } from "../../../../utils/helpers/getYearMonthDay";

function Schedule() {
  const [openAppointmentModal, setOpenAppointmentModal] = useState(false);
  const [openMakeAppointmentModal, setOpenMakeAppointmentModal] =
    useState(false);
  const [appointmentModalData, setAppointmentModalData] = useState({});
  const [doctorId, setDoctorId] = useState();
  const [doctorIdForAppointment, setDoctorIdForAppointment] = useState();
  const [searchedDoctor, setSearchedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeForAppointment, setTimeForAppointment] = useState();



  const { data: todaySchedules, isLoading: todayScheduleLoading } =
    useGetAllScheduleForTodayQuery("");

  const { data: doctorsList, isLoading: doctorsListLoading } =
    useGetAllDoctorsQuery("");

  const [
    searchSchedulesByDoctor,
    { data: searchedScheduleList = [], isLoading: searchedScheduleListLoading },
  ] = useLazySearchSchedulesByDoctorNameQuery();

  const [searchDoctors, { data: searchDoctorsResult }] =
    useLazySearchDoctorsQuery();

  const debouncedValue = useDebounce(searchedDoctor, 400);

  const [
    getAllSchedulesByDoctorIdYearMonth,
    { data: allSchedulesByDoctorIdYearMonth },
  ] = useLazyGetAllSchedulesByDoctorIdYearMonthQuery();

  const [getResultByDoctorDateTime, { data: resultByDoctorDateTime }] =
    useLazyGetResultByDoctorDateTimeQuery();

  const [getDoctorScheduleByDate, { data: doctorScheduleByDate }] =
    useLazyGetDoctorScheduleByDateQuery();

  const handleDoctorSelect = (e) => {
    const { value } = e.target;
    setDoctorId(value);
  };

  const handleSearchDoctor = (e) => {
    const { value } = e.target;
    setSearchedDoctor(value);
  };

  useEffect(() => {
    if (doctorId) {
      const date = getYearMonthDay(selectedDate);
      getDoctorScheduleByDate({ date, doctorId });
    }
  }, [doctorId, selectedDate]);

  useEffect(() => {
    if (doctorId) {
      const localDate = getYearMonthDay(selectedDate);

      console.log("++++", localDate);

      // const localDate = getYearMonthDay(selectedDate);
      const localTime = "09:00";
      getResultByDoctorDateTime({ doctorId, localDate, localTime });
    }
  }, [doctorId]);

  useEffect(() => {
    if (doctorId) {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1;
      getAllSchedulesByDoctorIdYearMonth({
        doctorId,
        year,
        month,
      });
    }
  }, [doctorId, selectedDate]);

  useEffect(() => {
    if (searchedDoctor.length > 0) {
      searchDoctors(debouncedValue);
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (searchDoctorsResult) {
      setDoctorIdForAppointment(searchDoctorsResult[0]?.doctorId);
    }
  }, [searchDoctorsResult]);

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
          {(searchedDoctor.length > 0) ? (
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
          <CalendarComp
            scheduledDays={allSchedulesByDoctorIdYearMonth}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        <div className={classes.calendar_hoursBlock}>
          <div className={classes.calendar_header}>
            <h3>Часы приема</h3>
            <p>Свободное время</p>
            <p>Занятое время</p>
          </div>
          {doctorScheduleByDate && (
            <Hours
              setOpenModal={setOpenMakeAppointmentModal}
              data={doctorScheduleByDate}
              setTime={setTimeForAppointment}
            />
          )}
        </div>
        {doctorId ? null : (
          <div className={classes.calendar_image_container}>
            <p>Выберите врача</p>
            <img src={calendarBackground} alt="" />
          </div>
        )}
      </div>
      {openAppointmentModal ? (
        <ModalAppointment
          doctorId={doctorIdForAppointment}
          appointmentModalData={appointmentModalData}
          openAppointmentModal={openAppointmentModal}
          setOpenAppointmentModal={setOpenAppointmentModal}
        />
      ) : null}

      <MakeAppointmentModal
        doctorId={doctorId}
        timeForAppointment={timeForAppointment}
        selectedDate={selectedDate}
        openModal={openMakeAppointmentModal}
        setOpenModal={setOpenMakeAppointmentModal}
      />
    </div>
  );
}

export default Schedule;
