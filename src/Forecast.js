import React from "react";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
//import Icons from "./Icons";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleForecast(response) {
    console.log(response.data);
  }

  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=419fb4560d921e7e18ca1ed3261fc38f&units=imperial`;
  axios.get(url).then(handleForecast);
  return props.city;

  //return (
  //<div className="Forecast">
  //<hr className="my-3" />
  //<h2>Hourly Forecast:</h2>
  //<Container className="Forecast">
  //<Row>
  //<Col>
  //<Icons icon="CLEAR_DAY" />
  //<p>12am</p>
  //</Col>
  //<Col>
  //<Icons icon="PARTLY_CLOUDY_DAY" />
  //<p>3am</p>
  //      </Col>
  //    <Col>
  //    <Icons icon="RAIN" />
  //  <p>6am</p>
  //       </Col>
  //     <Col>
  //     <Icons icon="WIND" />
  //   <p>9am</p>
  //       </Col>
  //     <Col>
  //     <Icons icon="CLOUDY" />
  //   <p>12pm</p>
  //       </Col>
  //     <Col>
  //     <Icons icon="SNOW" />
  //   <p>3pm</p>
  //        </Col>
  //    </Row>
  //</Container>
  //  </div>
  //);
}
