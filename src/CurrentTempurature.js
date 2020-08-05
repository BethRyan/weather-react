import React, { useState } from "react";

export default function CurrentTempurature(props) {
  const [unit, setUnit] = useState("imperial");

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "imperial") {
    return (
      <div className="CurrentTempurature">
        <span id="current-temp">{props.far}</span>
        <span id="units">
          {" "}
          °F |{" "}
          <a href="/" onClick={displayCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="CurrentTempurature">
        <span id="current-temp">{props.cel}</span>
        <span id="units">
          <a href="/" onClick={displayFahrenheit}>
            {" "}
            °F{" "}
          </a>
          | °C
        </span>
      </div>
    );
  }
}
