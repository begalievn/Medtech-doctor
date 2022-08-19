import React from "react";
import classes from "./hours.module.css";

const Hours = ({ hours }) => {
  return (
    <div className={classes.hours}>
      {hours.map(({ hour, booked }) => {
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
