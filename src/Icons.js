import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icons(props) {
  return (
    <div className="Icons">
      <ReactAnimatedWeather
        icon={props.icon}
        color="#3b2e5a"
        size={40}
        animate={true}
      />
    </div>
  );
}
