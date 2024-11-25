import React from "react";
import { Badge, Card } from "react-bootstrap";
import { FaCalendar, FaMapMarker, FaStar } from "react-icons/fa";

const TravelCard = ({
  title,
  subtitle,
  image,
  location,
  duration,
  dates,
  price,
  originalPrice,
  rating,
  isBestSeller,
}) => {
  return (
    <Card className="travel-card">
      <Card.Img variant="top" src={image} />
      {isBestSeller && (
        <Badge bg="primary" className="best-seller-badge">
          Best Seller
        </Badge>
      )}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <div className="d-flex align-items-center mb-2">
          <FaMapMarker size={16} className="me-1" />
          <small>{location}</small>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center">
            <FaCalendar size={16} className="me-1" />
            <small>{duration}</small>
          </div>
          <small>{dates}</small>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span className="text-decoration-line-through me-2">
              ₹{originalPrice}
            </span>
            <span className="fw-bold">₹{price}</span>
          </div>
          <div className="d-flex align-items-center">
            <FaStar size={16} fill="gold" stroke="gold" />
            <small className="ms-1">{rating}</small>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TravelCard;
