import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import LocationInfo from "../components/LocationInfo";

const ProductCard = ({ image, title, originalPrice, salePrice }) => {
  return (
    <Card className="product-card">
      <div className="image-wrapper">
        <Card.Img variant="top" src={image} />
        <span className="sale-badge">Sale!</span>
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="price-container">
          {originalPrice && (
            <span className="original-price">₹{originalPrice}</span>
          )}
          <span className="sale-price">₹{salePrice}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

const ProductGrid = () => {
  const products = [
    {
      image:
        "https://media.istockphoto.com/id/547436912/photo/bungee-jumping.jpg?s=612x612&w=0&k=20&c=yGAdtv_o5h9uzsLhHFxU9al_H-3EzgSCuqRiJ9Hq08A=",
      title: "Bungee Jumping at Kedar",
      originalPrice: "10,500",
      salePrice: "9,500",
    },
    {
      image:
        "https://media.istockphoto.com/id/157428593/photo/bungee-jump.jpg?s=612x612&w=0&k=20&c=zzpFACERV4Rs7nA615jEb8fIP8UQSDa-JVBL7FjAmsI=",
      title: "Bungee Jumping at Dehradun",
      salePrice: "17,500",
    },
    // Add more products as needed
  ];

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

const ActivityScreen = () => {
  return (
    <Container fluid className="destination-container py-5">
      <Row className="justify-content-center text-center mb-4">
        <Col lg={8}>
          <h1 className="display-4 fw-bold">Bungee Jumping</h1>
        </Col>
      </Row>

      <Row className="justify-content-center text-center">
        <Col lg={8}>
          <p className="lead text-muted mb-4">
            Bungee jumping is an adventure activity that involves jumping from a
            great height while connected to a large elastic cord. The cord, also
            known as a bungee, stretches and then recoils, slowing down the
            jumper’s descent and allowing them to experience a thrilling
            free-fall before being safely caught.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center text-center"></Row>
      <ProductGrid />
      <LocationInfo />
    </Container>
  );
};

export default ActivityScreen;
