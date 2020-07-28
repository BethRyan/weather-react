import React from "react";

export default function Date(props) {
  //LOCAL TIME CLOCK
  let hour = props.date.getHours();
  let minute = props.date.getMinutes();
  let time = "" + (hour > 12 ? hour - 12 : hour);
  if (hour === 0) time = "12";
  time += (minute < 10 ? ":0" : ":") + minute;
  time += hour >= 12 ? " P.M." : " A.M.";

  //GET NAME OF CURRENT LOCAL DAY
  let dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dayName[props.date.getDay()];

  //THE RENDERING:
  return (
    <div className="localTime">
      Updated: {day} {time}
    </div>
  );
}
