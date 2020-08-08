import React, { useState } from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import axios from "axios";
import Loading from "./Loading";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [info, setInfo] = useState({ loaded: false });

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
      date: new Date(response.data.dt * 1000),
      loaded: true,
    });
  }

  if (info.loaded) {
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
        <Weather info={info} />
        <Forecast info={info} />
      </div>
    );
  } else {
    let defaultCity = "New York";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=419fb4560d921e7e18ca1ed3261fc38f&units=imperial`;
    axios.get(url).then(weatherInformation);

    return <Loading />;
  }
}
