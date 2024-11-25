import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaWhatsapp,
  FaGlobe,
  FaHiking,
  FaPlane,
  FaFemale,
  FaMotorcycle,
  FaUmbrellaBeach,
  FaGlobeAmericas,
  FaMapMarkedAlt,
  FaGraduationCap,
  FaBriefcase,
  FaBackspace,
} from "react-icons/fa";

const TravelOption = ({ icon, title, whatsapp, globe }) => (
  <Col xs={4} className="mb-3">
    <div className="travel-option text-center">
      {icon}
      <div className="title">{title}</div>
      <div className="contact-icons">
        {whatsapp && <FaWhatsapp className="icon whatsapp" />}
        {globe && <FaGlobe className="icon globe" />}
      </div>
    </div>
  </Col>
);

const TravelOptions = () => {
  const adventureAdvisors = [
    { icon: <FaHiking size={30} />, title: "Treks" },
    { icon: <FaBackspace size={30} />, title: "Backpacking" },
    { icon: <FaPlane size={30} />, title: "International" },
    { icon: <FaFemale size={30} />, title: "All Girls" },
    { icon: <FaMotorcycle size={30} />, title: "Biking" },
    { icon: <FaUmbrellaBeach size={30} />, title: "Weekends" },
  ];

  const globalExplorers = [
    {
      icon: <FaGlobeAmericas size={30} />,
      title: "International Travel Plans",
    },
    { icon: <FaMapMarkedAlt size={30} />, title: "Domestic Travel Plans" },
    { icon: <FaGraduationCap size={30} />, title: "School & College Trips" },
    { icon: <FaBriefcase size={30} />, title: "Corporate Offsites & Trips" },
  ];

  return (
    <Container className="travel-options-container">
      <h1 className="text-center mb-4">
        Your <span className="text-success fw-bold">Wravel</span> Companions
      </h1>
      <Row>
        <Col md={6}>
          <Card className="mb-4 adventure-advisors">
            <Card.Header className="text-center bg-light-green">
              <h5 className="mb-0">Adventure Advisors</h5>
              <small>(For all Fixed Departures)</small>
            </Card.Header>
            <Card.Body>
              <Row>
                {adventureAdvisors.map((option, index) => (
                  <TravelOption key={index} {...option} whatsapp globe />
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4 global-explorers">
            <Card.Header className="text-center bg-light-blue">
              <h5 className="mb-0">Global Explorers</h5>
              <small>(For all Customised Packages)</small>
            </Card.Header>
            <Card.Body>
              <Row>
                {globalExplorers.map((option, index) => (
                  <TravelOption key={index} {...option} whatsapp globe />
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TravelOptions;
