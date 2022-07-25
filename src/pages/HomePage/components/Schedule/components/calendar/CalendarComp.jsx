import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

import classes from "./calendarComp.module.css";

function CalendarComp() {
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

  // State for date selected by user
  const [selectedDate, setSelectedDate] = useState();

  // State for text above calendar
  const [calendarText, setCalendarText] = useState(`No Date is selected`);

  // Function to update selected date and calendar text
  const handleDateChange = (value) => {
    setSelectedDate(value);
    setCalendarText(`The selected Date is ${value.toDateString()}`);
    console.log(value);
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

  return (
    <div className={classes.calendar_container}>
      <Calendar
        className={classes.calendar}
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        onChange={handleDateChange}
        value={selectedDate}
      />
    </div>
  );
}

export default CalendarComp;
