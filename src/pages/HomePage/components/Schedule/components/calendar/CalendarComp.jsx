import React, { useEffect, useState } from "react";
import moment from "moment";
import { addDays } from "date-fns";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "./Calendar.css";

import classes from "./calendarComp.module.css";
import Hours from "../hours/Hours";
import { ScheduleService } from "../../../../../../services/ScheduleService";

const now = new Date();
const tomorrow = addDays(now, 1);
const in3Days = addDays(now, 3);
const in5Days = addDays(now, 5);

const hours = ["10:20", "12:20", "13:20", "14:20"];
const days = [
  { date: "2022-08-20", status: "WHITE" },
  { date: "2022-08-10", status: "WHITE" },
  { date: "2022-08-12", status: "WHITE" },
];
//
// const status = {
//   white: 'white'
// }

const data = {
  date: "2022-08-18",
  hours: [
    { hour: "10:00", booked: true },
    { hour: "11:00", booked: false },
    { hour: "12:00", booked: false },
    { hour: "13:00", booked: true },
  ],
};

const disabledDates = [tomorrow, in3Days, in5Days];

function CalendarComp() {
  const [newData, setNewData] = useState(null);
  // Array to store month string values
  const allMonthValues = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Aвгуст",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  useEffect(() => {
    ScheduleService.getTime();
  }, []);
  // State for date selected by user
  const [selectedDate, setSelectedDate] = useState();

  // State for text above calendar
  const [calendarText, setCalendarText] = useState(`No Date is selected`);

  // Function to update selected date and calendar text
  const handleDateChange = (value) => {
    setSelectedDate(value);
    setNewData(data);
    setCalendarText(`The selected Date is ${value.toDateString()}`);
    console.log(value.getDay());
  };

  // Function to handle selected Year change
  const handleYearChange = (value) => {
    const yearValue = value.getFullYear();
    setCalendarText(`${yearValue} Year  is selected`);
  };

  // Function to handle selected Month change
  const handleMonthChange = (value) => {
    const monthValue = allMonthValues[value.getMonth()];
    setCalendarText(`${monthValue} Month  is selected`);
  };

  const handleData = () => {};

  return (
    <div className={classes.calendar_container}>
      <Calendar
        tileClassName={({ date }) => {
          const newDate = moment(date).format().split("T")[0];
          const condition = days.some(
            (item) => item.date === newDate && item.status
          );
          if (condition) {
            return classes.booked;
          }
        }}
        // tileClassName={({ date }) => {
        //   const isOnList = disabledDates.checkdates.some((data, index) => {
        //     let datedata = new Date(data);
        //     let dateOne = moment(date).format("L");
        //     let datetwo = moment(datedata).format("L");
        //     return dateOne === datetwo;
        //   });
        //
        //   if (isOnList) {
        //     return "testdata";
        //   } else {
        //     return null;
        //   }
        // }}
        className={classes.calendar}
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        onChange={handleDateChange}
        value={selectedDate}
      />
      {newData && (
        <div className={classes.calendar_hoursBlock}>
          <div className={classes.calendar_header}>
            <h3>Часы приема</h3>
            <p>Свободное время</p>
            <p>Занятое время</p>
          </div>
          <Hours hours={newData.hours || []} />
        </div>
      )}
    </div>
  );
}

export default CalendarComp;
