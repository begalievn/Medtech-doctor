import React from "react";
import classes from "./hours.module.css";

const data = {
  date: "2022-08-18",
  hours: [
    { hour: "10:00", booked: true },
    { hour: "11:00", booked: false },
    { hour: "12:00", booked: false },
    { hour: "13:00", booked: true },
  ],
};

const Hours = ({}) => {
  return (
    <div className={classes.hours}>
      {data.hours.map(({ hour, booked }) => {
        return (
          <div
            className={`${classes.hourItem} ${booked && classes.active}`}
            key={hour}
          >
            <span>{hour}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Hours;
