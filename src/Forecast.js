import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div>
      <ReactAnimatedWeather
        icon="RAIN"
        color="lightblue"
        size={70}
        animate="true"
      />
    </div>
  );
}
//Set props in the Searchengine
const App = () => (
  <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />
);

export default App;
