import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Weather(props) {
  let city = props.cityName;
  let temp = props.temp;
  let description = props.description;
  let wind = props.wind;
  let humidity = props.humidity;
  let icon = `https://openweathermap.org/img/wn/${props.icon}@2x.png`;
  if (temp) {
    return (
      <div className="Weather">
        <hr class="my-3" />
        <h2>The weather in {city}:</h2>
        <Container>
          <Row>
            <Col id="icon-col">
              <img min-width="100px" id="icon" src={icon} alt="weather icon" />
              <p id="current-temp">Currently: {Math.round(temp)}°F | °C</p>
            </Col>
            <Col id="current-stats-col">
              <ul id="list">
                <li>Feels Like: {Math.round(temp)}°F | °C</li>
                <li>Description: {description}</li>
                <li>Humidity: {humidity}%</li>
                <li>Wind: {Math.round(wind)}mph</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return <h5>Enter a city</h5>;
  }
}
