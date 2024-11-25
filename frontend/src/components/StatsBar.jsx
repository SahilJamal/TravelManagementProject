import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar, FaUsers, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";

const StatsBar = () => {
  const location = useLocation();

  const stats = [
    { icon: FaStar, value: "7095+", label: "Reviews" },
    { icon: FaUsers, value: "50,000+", label: "Satisfied Travelers" },
    { icon: FaMapMarkerAlt, value: "50+", label: "Destinations" },
    { icon: FaBriefcase, value: "7 Years+", label: "Experience" },
  ];

  return (
    <>
      {location.pathname === "/" && (
        <Container fluid className="bg-dark text-white py-3">
          <Row className="justify-content-center align-items-center">
            {stats.map((stat, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={3}
                className="text-center mb-3 mb-md-0"
              >
                <stat.icon size={24} className="mb-2" />
                <h4 className="mb-0">{stat.value}</h4>
                <p className="mb-0 small">{stat.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default StatsBar;
