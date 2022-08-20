import React from "react";
import classes from "./hours.module.css";


const Hours = ({ data, setOpenModal, setTime }) => {

  console.log("data", data);

  const handleHourClick = (hour) => {
    setTime(hour);
    setOpenModal(true);
    console.log("open modal");
  }


  return (
    <div className={classes.hours}>
      {data.hours.map(({ hour, booked }) => {
        return (
          <div
            className={`${classes.hourItem} ${booked && classes.active}`}
            key={hour}
            onClick={() => handleHourClick(hour)}
          >
            <span>{getProperFormatHour(hour)}</span>
          </div>
        );
      })}
    </div>
  );
};

function getProperFormatHour(hour) {
  return hour.split(":").slice(0, 2).join(":");
}

export default Hours;

// const data = {
//   date: "2022-08-18",
//   hours: [
//     { hour: "10:00", booked: true },
//     { hour: "11:00", booked: false },
//     { hour: "12:00", booked: false },
//     { hour: "13:00", booked: true },
//   ],
// };
