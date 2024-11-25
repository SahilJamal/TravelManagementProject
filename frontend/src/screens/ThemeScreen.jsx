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
        "https://media.gettyimages.com/id/157525567/photo/biker-out-for-a-ride.jpg?s=612x612&w=0&k=20&c=ot9RQGr0ohOmQHQMmA1xyYrU6o2xTcwkx9ysWCI4AmU=",
      title: "Ladakh Bike Trip 2024 – Srinagar Leh Manali Delhi 10N and 11D",
      originalPrice: "28,500",
      salePrice: "22,500",
    },
    {
      image:
        "https://media.gettyimages.com/id/157525567/photo/biker-out-for-a-ride.jpg?s=612x612&w=0&k=20&c=ot9RQGr0ohOmQHQMmA1xyYrU6o2xTcwkx9ysWCI4AmU=",
      title:
        "Ladakh Bike Expedition – Leh to Leh with Turtuk Village 6N and 7D",
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

const ThemeScreen = () => {
  return (
    <Container fluid className="destination-container py-5">
      <Row className="justify-content-center text-center mb-4">
        <Col lg={8}>
          <h1 className="display-4 fw-bold">
            Explore Leh Ladakh Tours Packages!
          </h1>
        </Col>
      </Row>

      <Row className="justify-content-center text-center">
        <Col lg={8}>
          <p className="lead text-muted mb-4">
            Located in northern India, Leh Ladakh is famous for its Tibetan
            Buddhist culture, stunning landscapes, and thrilling tourism
            activities. From trekking to visiting monasteries, explore the
            beauty of nature with our specially curated packages.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center text-center">
        <Col lg={8}>
          <p className="fs-5 text-dark">
            <strong>Ladakh Bike Trip:</strong> Srinagar - Leh - Manali - Delhi
            (10N/11D) starting at just ₹24,500!
            <br />
            <strong>Ladakh SUV Tour:</strong> Leh to Leh for 5 days and more
            exciting offers.
          </p>
        </Col>
      </Row>
      <ProductGrid />
      <LocationInfo />
    </Container>
  );
};

export default ThemeScreen;
