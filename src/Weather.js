import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Date from "./Date";
import Icons from "./Icons";
import CurrentTempurature from "./CurrentTempurature";

export default function Weather(props) {
  let city = props.info.name;
  let temp = props.info.temp;
  let wind = props.info.wind;
  let humidity = props.info.humidity;
  let icon = props.info.icon;

  return (
    <div className="Weather">
      <h2>{city}:</h2>

      <Container>
        <Row>
          <Col id="current-icon-col">
            <div className="clearfix">
              <div className="float-left" id="current-icon">
                <Icons size={52} code={icon} color={"#3b2e5a"} />
              </div>
              <div className="float-left">
                <CurrentTempurature
                  far={Math.round(temp)}
                  cel={Math.round(((temp - 32) * 5) / 9)}
                />
              </div>
            </div>
          </Col>
          <Col xs={7} id="current-stats-col">
            <ul id="list">
              <li>Description: {props.info.description}</li>
              <li>Feels Like: {Math.round(props.info.feelsLike)}°F</li>
              <li>Humidity: {humidity}%</li>
              <li>Wind: {Math.round(wind)}mph</li>
              <li>
                <div className="UpdatedTime">
                  <Date date={props.info.date} />
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
