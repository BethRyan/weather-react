import React from "react";

export default function Weather(props) {
  let city = props.cityName;
  let temp = props.temp;
  let description = props.description;
  let wind = props.wind;
  let humidity = props.humidity;
  let icon = `https://openweathermap.org/img/wn/${props.icon}@2x.png`;
  //if (temp) {
  return (
    <div className="Weather">
      <h2>The weather in {city}:</h2>
      <div class="row">
        <div class="col-6">
          <img src={icon} alt="weather icon" />
        </div>
      </div>
      <div class="col-6">
        <ul id="list">
          <li>Tempurature: {Math.round(temp)}°F</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {Math.round(wind)}mph</li>
        </ul>
      </div>
      <hr class="my-3" />
    </div>
  );
} //else {
//return <h5>Enter a city</h5>;
//}
//}
