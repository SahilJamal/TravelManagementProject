import React from "react";
import { Col, Row } from "react-bootstrap";
import { destinations } from "../screens/HomeScreen";
// import "./DestinationCard.css";

const DestinationCard = ({ title }) => {
  return (
    <>
      <h4 className="text-success mt-4rem">{title}</h4>
      <Row>
        <Col
          className="pointer"
          lg={6}
          xs={12}
          style={{ height: "50vh", position: "relative" }}
        >
          <b
            style={{
              fontWeight: 600,
              position: "absolute",
              bottom: "10px",
              left: "20px",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
              zIndex: 1,
            }}
          >
            {destinations?.[0]?.name}
          </b>
          <img
            src={destinations?.[0]?.image}
            alt="pic 1"
            className="img-fluid rounded hover-zoom"
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
              zIndex: -1,
            }}
          />
        </Col>
        <Col className="pointer" lg={6} xs={12} style={{ height: "25vh" }}>
          <div
            className="image-container-card"
            style={{ position: "relative" }}
          >
            <b
              style={{
                fontWeight: 600,
                position: "absolute",
                bottom: "10px",
                left: "10px",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
                zIndex: 1,
              }}
            >
              {destinations?.[0]?.name}
            </b>
            <img
              src={destinations?.[0]?.image}
              alt="pic 1"
              className="img-fluid rounded hover-zoom"
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                zIndex: -1,
              }}
            />
          </div>
          <Row>
            <Col
              className="pointer"
              lg={6}
              xs={12}
              style={{
                height: "22vh",
                marginTop: "1.25rem",
                position: "relative",
              }}
            >
              <b
                style={{
                  fontWeight: 600,
                  position: "absolute",
                  bottom: "10px",
                  color: "white",
                  padding: "5px",
                  borderRadius: "5px",
                  zIndex: 1,
                }}
              >
                {destinations?.[0]?.name}
              </b>
              <img
                src={destinations?.[0]?.image}
                alt="pic 1"
                className="img-fluid rounded hover-zoom"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  zIndex: -1,
                }}
              />
            </Col>
            <Col
              className="pointer"
              lg={6}
              xs={12}
              style={{
                height: "22vh",
                marginTop: "1.25rem",
                position: "relative",
              }}
            >
              <b
                style={{
                  fontWeight: 600,
                  position: "absolute",
                  left: "20px",
                  bottom: "10px",
                  color: "white",
                  padding: "5px",
                  borderRadius: "5px",
                  zIndex: 1,
                }}
              >
                {destinations?.[2]?.name}
              </b>
              <img
                src={destinations?.[2]?.image}
                alt="pic 1"
                className="img-fluid rounded hover-zoom"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  zIndex: -1,
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col
          className="pointer"
          lg={3}
          xs={12}
          style={{ height: "25vh", marginTop: "1.25rem", position: "relative" }}
        >
          <b
            style={{
              fontWeight: 600,
              position: "absolute",
              bottom: "10px",
              left: "20px",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
              zIndex: 1,
            }}
          >
            {destinations?.[1]?.name}
          </b>
          <img
            src={destinations?.[1]?.image}
            alt="pic 1"
            className="img-fluid rounded hover-zoom"
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
              zIndex: -1,
            }}
          />
        </Col>
        <Col
          className="pointer"
          lg={3}
          xs={12}
          style={{ height: "25vh", marginTop: "1.25rem", position: "relative" }}
        >
          <b
            style={{
              fontWeight: 600,
              position: "absolute",
              bottom: "10px",
              left: "20px",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
              zIndex: 1,
            }}
          >
            {destinations?.[1]?.name}
          </b>
          <img
            src={destinations?.[1]?.image}
            alt="pic 1"
            className="img-fluid rounded hover-zoom"
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
              zIndex: -1,
            }}
          />
        </Col>
        <Col
          className="pointer"
          lg={6}
          xs={12}
          style={{ height: "25vh", marginTop: "1.25rem", position: "relative" }}
        >
          <b
            style={{
              fontWeight: 600,
              position: "absolute",
              bottom: "10px",
              left: "20px",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
              zIndex: 1,
            }}
          >
            {destinations?.[1]?.name}
          </b>
          <img
            src={destinations?.[2]?.image}
            alt="pic 1"
            className="img-fluid rounded hover-zoom"
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
              zIndex: -1,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default DestinationCard;
