import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Forecast.css";
import axios from "axios";
import ForecastHourly from "./ForecastHourly";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  const city = props.info.name;

  function handleForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && city === forecast.city.name) {
    return (
      <div className="Forecast">
        {/*<hr className="my-3" />*/}
        <h2>Hourly Forecast:</h2>
        <Container className="Forecast">
          <Row>
            <Col>
              <ForecastHourly forecast={forecast.list[0]} />
            </Col>
            <Col>
              <ForecastHourly forecast={forecast.list[1]} />
            </Col>
            <Col>
              <ForecastHourly forecast={forecast.list[2]} />
            </Col>
            <Col>
              <ForecastHourly forecast={forecast.list[3]} />
            </Col>
            <Col>
              <ForecastHourly forecast={forecast.list[4]} />
            </Col>
            <Col>
              <ForecastHourly forecast={forecast.list[5]} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=419fb4560d921e7e18ca1ed3261fc38f&units=imperial`;
    axios.get(url).then(handleForecast);
    return null;
  }
}
