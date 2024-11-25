import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ImageGallery = ({ images }) => {
  return (
    <Container className="p-2 image-container">
      <Row className="mb-2">
        <Col xs={9} md={9} xl={12}>
          <img
            src={images[0]}
            alt="pic 1"
            className="img-fluid rounded"
            style={{ objectFit: "cover", height: "200px", width: "100%" }}
          />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={3} className="pe-1" md={3} xl={6}>
          <img
            src={images[1]}
            alt="pic 2"
            className="img-fluid rounded"
            style={{ objectFit: "cover", height: "100px", width: "100%" }}
          />
        </Col>
        <Col xs={6} className="ps-1" xl={6}>
          <img
            src={images[2]}
            alt="pic 3"
            className="img-fluid rounded"
            style={{ objectFit: "cover", height: "100px", width: "100%" }}
          />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={9} md={9} xl={12}>
          <img
            src={images[3]}
            alt="pic 4"
            className="img-fluid rounded"
            style={{ objectFit: "cover", height: "150px", width: "100%" }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={9} md={9} xl={12}>
          <img
            src={images[4]}
            alt="pic 5"
            className="img-fluid rounded"
            style={{ objectFit: "cover", height: "100px", width: "100%" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ImageGallery;
