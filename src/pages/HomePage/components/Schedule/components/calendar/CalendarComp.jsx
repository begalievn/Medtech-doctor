// modules
import React, { useEffect, useState } from "react";
import moment from "moment";
import Calendar from "react-calendar";


// styles
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import classes from "./calendarComp.module.css";


const CalendarComp = ({selectedDate, setSelectedDate, scheduledDays}) => {

  const days = scheduledDays || [];

  // Function to update selected date and calendar text
  const handleDateChange = (value) => {
    setSelectedDate(value);
  };

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
        className={classes.calendar}
        onChange={handleDateChange}
        value={selectedDate}
      />
    </div>
  );
}

export default CalendarComp;
