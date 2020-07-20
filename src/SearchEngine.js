import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [info, setInfo] = useState({});

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=419fb4560d921e7e18ca1ed3261fc38f&units=imperial`;
    axios.get(url).then(weatherInformation);
  }

  function weatherInformation(response) {
    setInfo({
      name: response.data.name,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      feelsLike: response.data.main.feels_like,
    });
    console.log(response.data);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input
          id="search-bar"
          type="search"
          placeholder="Search new city"
          autoFocus="on"
          autoComplete="off"
          onChange={updateCity}
        />
        <input id="search-btn" type="submit" value="Search" />
      </form>

      <Weather
        cityName={info.name}
        temp={info.temp}
        wind={info.wind}
        humidity={info.humidity}
        description={info.description}
        icon={info.icon}
        feelsLike={info.feelsLike}
      />
    </div>
  );
}
