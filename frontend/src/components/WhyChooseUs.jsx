import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaSearch, FaUser, FaBicycle } from "react-icons/fa";
import { MdCorporateFare, MdOutlineDocumentScanner } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <Container fluid>
      <Col xs={12}>
        <h6 className="text-uppercase text-muted mb-1">WHY CHOOSE US</h6>
        <blockquote className="blockquote mb-1">
          <p className="font-italic">
            "You are not living, if you are not dreaming"
          </p>
        </blockquote>

        <p className="mb-1">
          Years ago, when Justwravel organized its first trip, we had the
          opportunity to turn other people's dreams into reality. We became the
          bridge that narrowed the gap between individuals and their travel
          dreams. With over 7 years of experience and the sole aim of creating a
          community of like-minded travelers,
        </p>

        <a href="/" className="text-primary">
          View More
        </a>
      </Col>

      <Row className="mt-5">
        {[
          {
            icon: <FaSearch size={24} />,
            number: "50,000+",
            text: "Satisfied Travelers",
          },
          {
            icon: <FaUser size={24} />,
            number: "150+",
            text: "All Girls Trips",
          },
          { icon: <FaBicycle size={24} />, number: "250+", text: "Bike Trips" },
          {
            icon: <MdCorporateFare size={24} />,
            text: "Customized",
            subtext: "Corporate Trips",
          },
          {
            icon: <MdOutlineDocumentScanner size={24} />,
            text: "Hand-picked",
            subtext: "Itineraries",
          },
          {
            icon: <FaRegMessage size={24} />,
            number: "7095+",
            text: "Reviews",
          },
        ].map((item, index) => (
          <Col key={index} xs={6} md={6} className="mb-2">
            <Card className="border-0 bg-light text-center h-100">
              <Card.Body>
                <div className="text-primary mb-1">{item.icon}</div>
                <h4>{item.number || item.text}</h4>
                <p className="text-muted">{item.text || item.subtext}</p>
                {item.subtext && <p className="text-muted">{item.subtext}</p>}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
