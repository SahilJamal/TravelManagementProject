import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LocationInfo from "../components/LocationInfo";
import CountUp from "react-countup";

const AboutUsScreen = () => {
  return (
    <Container fluid className="destination-container py-5 mt-4rem">
      <Row className="justify-content-center text-center mb-4 w-100">
        <Col xs={12} md={6} className="my-auto">
          <h1 className="display-6 fw-bold text-wrap">
            Our Vision: Helping You Explore The World...
          </h1>
          <p className="fs-5">
            At International Youth Club, your worry-free adventure starts with
            us. Share your needs, and we’ll craft customized, top-tier packages
            just for you!
          </p>
        </Col>
        <Col xs={12} md={6}>
          <img
            src="https://cdn.pixabay.com/photo/2017/02/18/23/14/people-2078486_640.jpg"
            alt=""
            className="img-fluid rounded"
          />
        </Col>
      </Row>

      <Row className="justify-content-center text-center w-100 mt-3 mb-4">
        <Col md={4} className="p-3">
          <div className="border p-4 rounded shadow">
            <h2 className="custom-font-style display-4">
              <CountUp start={0} end={1000} duration={2.5} />
            </h2>
          </div>
        </Col>

        <Col md={4} className="p-3">
          <div className="border p-4 rounded shadow">
            <h2 className="custom-font-style display-4">
              <CountUp start={0} end={500} duration={2.5} />
            </h2>
          </div>
        </Col>

        <Col md={4} className="p-3">
          <div className="border p-4 rounded shadow">
            <h2 className="custom-font-style display-4">
              <CountUp start={0} end={250} duration={2.5} />
            </h2>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center text-center"></Row>
      <LocationInfo />
    </Container>
  );
};

export default AboutUsScreen;
