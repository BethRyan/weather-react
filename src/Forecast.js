import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icons from "./Icons";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <hr class="my-3" />
      <h2>Hourly Forecast</h2>
      <Container>
        <Row>
          <Col>
            <Icons icon="CLEAR_DAY" />
            <p>12am</p>
          </Col>
          <Col>
            <Icons icon="PARTLY_CLOUDY_DAY" />
            <p>3am</p>
          </Col>
          <Col>
            <Icons icon="RAIN" />
            <p>6am</p>
          </Col>
          <Col>
            <Icons icon="WIND" />
            <p>9am</p>
          </Col>
          <Col>
            <Icons icon="CLOUDY" />
            <p>12pm</p>
          </Col>
          <Col>
            <Icons icon="SNOW" />
            <p>3pm</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
