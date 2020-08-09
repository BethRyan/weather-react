import React from "react";
import Icons from "./Icons";

export default function ForecastHourly(props) {
  function time() {
    let date = new Date(props.forecast.dt * 1000);
    let hour = date.getHours();
    let minute = date.getMinutes();
    let time = "" + (hour > 12 ? hour - 13 : hour);
    if (hour === 1) {
      time = "12";
    }
    if (hour === 13) {
      time = "12";
    }
    time += (minute < 10 ? ":0" : ":") + minute;
    time += hour >= 12 ? " P.M." : " A.M.";
    return time;
  }
  function temperature() {
    let temp = Math.round(props.forecast.main.temp);
    return `${temp}°F`;
  }
  return (
    <div className="Forecast">
      <span className="Time">{time()}</span>
      <Icons
        size={40}
        code={props.forecast.weather[0].icon}
        color={"#f5f5f5"}
      />
      {temperature()}
    </div>
  );
}
