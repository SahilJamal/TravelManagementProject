import React from "react";
import { FaHandshakeSimple, FaUserGroup } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { FaMusic } from "react-icons/fa6";
import { GiCampingTent, GiMountainClimbing } from "react-icons/gi";
import { FaTree } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";

const offerings = [
  {
    icon: <FaHandshakeSimple className="offering-icon" />,
    title: "Ice Breaking Sessions",
  },
  {
    icon: <GrGroup className="offering-icon" />,
    title: "Communication Activities",
  },
  {
    icon: <FaUserGroup className="offering-icon" />,
    title: "Team Building Activities",
  },
  {
    icon: <FaMusic className="offering-icon" />,
    title: "Bonfire and Live Jamming Sessions",
  },
  {
    icon: <GiCampingTent className="offering-icon" />,
    title: "Off-beat Venues",
  },
  {
    icon: <FaUserGroup className="offering-icon" />,
    title: "MICE",
  },
  {
    icon: <GiMountainClimbing className="offering-icon" />,
    title: "Adventure Activities",
  },
  {
    icon: <FaTree className="offering-icon" />,
    title: "Nature Walks",
  },
];
const CorporateOfferings = () => {
  return (
    <div className="offerings-section">
      <Container>
        <div className="text-center mb-5">
          <h1 className="main-title">
            Unlocking Exceptional{" "}
            <span className="text-primary">Corporate Experiences</span>
          </h1>
          <h2 className="subtitle">
            Elevate Your Team's Travel Journey with Us
          </h2>
        </div>

        <div className="offerings-container">
          <h2 className="text-center mb-5">What do we offer?</h2>
          <Row className="g-4">
            {offerings.map((offering, index) => (
              <Col key={index} xs={6} md={3}>
                <div className="offering-card">
                  <div className="icon-circle">{offering.icon}</div>
                  <h6 className="offering-title">{offering.title}</h6>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default CorporateOfferings;
