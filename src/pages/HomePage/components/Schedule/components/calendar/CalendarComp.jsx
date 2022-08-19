// modules
import React, { useEffect, useState } from "react";
import moment from "moment";
import Calendar from "react-calendar";

// modules
import Hours from "../hours/Hours";

// utils
import { ScheduleService } from "../../../../../../services/ScheduleService";

// styles
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import classes from "./calendarComp.module.css";

const days = [
  { date: "2022-08-20", status: "WHITE" },
  { date: "2022-08-10", status: "WHITE" },
  { date: "2022-08-12", status: "WHITE" },
];




const CalendarComp = ({newData, setNewData}) => {


  // State for date selected by user
  const [selectedDate, setSelectedDate] = useState();

  // Function to update selected date and calendar text
  const handleDateChange = (value) => {
    setSelectedDate(value);
    setNewData(value);
    console.log(value.getFullYear());
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
