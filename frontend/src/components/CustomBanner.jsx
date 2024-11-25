import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CustomBanner = ({ imageUrl, title, buttonText, height }) => {
  return (
    <div
      className="custom-banner"
      style={{
        backgroundImage: `url(${imageUrl})`,
        height: height || "200px",
      }}
    >
      <Container className="h-100">
        <Row className="h-100 align-items-center">
          <Col md={6}>
            <h1 className="banner-title">{title}</h1>
            <Button variant="warning" className="banner-button">
              {buttonText}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomBanner;
