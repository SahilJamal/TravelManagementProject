import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const RecognitionsSection = () => {
  const recognitionLogos = [
    {
      id: 1,
      src: "https://storage.justwravel.com/common/recognition/1.png",
      alt: "Startup India",
    },
    {
      id: 2,
      src: "https://storage.justwravel.com/common/recognition/2.png",
      alt: "MSME",
    },
    {
      id: 3,
      src: "https://storage.justwravel.com/common/recognition/8.png",
      alt: "UP Tourism Red",
    },
    {
      id: 4,
      src: "https://imgs.search.brave.com/XasSdWIO2fCWZ180ewEl177j21QXpUZ_B8vbntUw8vo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzM0MjY5/OTEvc2NyZWVuc2hv/dHMvNjU3NTMwNy91/dHRhcmFraGFuZC10/b3VyaXNtLmpwZz9y/ZXNpemU9NDAweDMw/MCZ2ZXJ0aWNhbD1j/ZW50ZXI",
      alt: "Uttarakhand Tourism",
    },
  ];

  return (
    <Container className="recognitions-section mt-4rem">
      <div className="text-center mb-4">
        <p className="section-subtitle">RECOGNITIONS</p>
        <h2 className="section-title">Recognitions By Govt.</h2>
      </div>

      <Row className="mb-5">
        <Col>
          <p className="recognition-text">
            In a brief period, JustWravel has achieved significant recognition
            and success. With each new milestone, Justwravel adds a unique
            feather to its cap. As a registered member of ATOAI, we are
            certified tour operators. Our journey has been characterized by
            excellence and trust, as demonstrated by our three-time consecutive
            receipt of the MSME Best Enterprise (Travel & Tourism) award.
          </p>
        </Col>
      </Row>

      <Row className="logo-grid">
        {recognitionLogos.map((logo) => (
          <Col key={logo.id} xs={6} md={3} className="logo-col">
            <div className="logo-container">
              <img src={logo.src} alt={logo.alt} className="recognition-logo" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecognitionsSection;
