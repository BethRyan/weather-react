import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Date from "./Date";

export default function Weather(props) {
  let city = props.info.name;
  let temp = props.info.temp;
  //let description = props.description;
  let wind = props.info.wind;
  let humidity = props.info.humidity;
  let icon = `https://openweathermap.org/img/wn/${props.info.icon}@2x.png`;

  return (
    <div className="Weather">
      <h2>{city}:</h2>
      <Date date={props.info.date} />
      <Container>
        <Row>
          <Col id="icon-col">
            <div className="clearfix">
              <img
                min-width="100px"
                id="icon"
                src={icon}
                alt="weather icon"
                className="float-left"
              />
              <div className="float-left">
                <span id="current-temp">{Math.round(temp)}</span>
                <span id="units">°F | °C</span>
              </div>
            </div>
          </Col>
          <Col id="current-stats-col">
            <ul id="list">
              <li>Feels Like: {Math.round(temp)}°F | °C</li>

              <li>Humidity: {humidity}%</li>
              <li>Wind: {Math.round(wind)}mph</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
