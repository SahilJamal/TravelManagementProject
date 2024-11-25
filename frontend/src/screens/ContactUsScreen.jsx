/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { ContactForm } from "../components/ContactForm";
import Marquee from "react-fast-marquee";

const ContactUsScreen = () => {
  const images = [
    { src: "https://via.placeholder.com/300x400", width: 30 },
    { src: "https://via.placeholder.com/300x400", width: 15 },
    { src: "https://via.placeholder.com/300x400", width: 35 },
    { src: "https://via.placeholder.com/300x400", width: 15 },
  ];

  return (
    <>
      <div
        style={{
          marginTop: "5.5rem",
          width: "100% !important",
          minHeight: "75vh",
        }}
      >
        <img
          loading="lazy"
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
          alt="First slide"
          style={{
            height: "75vh",
            objectFit: "cover",
            borderRadius: "30px",
          }}
        />
      </div>

      <Container className="mt-4rem">
        <Row className="justify-content-center text-center mb-4">
          <Col lg={12}>
            <h1 className="display-4 fw-5">
              Your next{" "}
              <span
                className="fw-bold"
                style={{ color: `var(--secondary-color) !important` }}
              >
                Adventure
              </span>{" "}
              is just a{" "}
              <span
                className="fw-bold"
                style={{ color: `var(--secondary-color) !important` }}
              >
                Call
              </span>{" "}
              away!
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <p className="lead mb-4 fw-bold">
              Got questions? Need travel tips? Or just want to share your latest
              travel story?
            </p>
          </Col>
          <Col lg={8}>
            <p className="lead mb-4 fw-bold">
              We're all ears! At JustWravel, we're not just about selling trips;
              we're about creating unforgettable experiences.
            </p>
          </Col>
          <Col lg={8}>
            <p className="lead mb-4 fw-bold">
              So, let's get the conversation started!
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={12} className="justify-content-center text-center mt-5">
            <h1 className="display-4 fw-5">
              Your{" "}
              <span
                className="fw-bold"
                style={{ color: `var(--secondary-color) !important` }}
              >
                Wravel
              </span>{" "}
              Companions
            </h1>
          </Col>
          <Col lg={8} className="d-flex justify-content-end">
            <div className="w-75 border rounded">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
                alt=""
                style={{
                  height: "90vh",
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "5px",
                }}
              />
            </div>
          </Col>
          <Col lg={4} className="d-flex justify-content-start">
            <div className="w-75 border rounded">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
                alt=""
                style={{
                  height: "90vh",
                  objectFit: "cover",
                  borderRadius: "5px",
                  width: "100%",
                }}
              />
            </div>
          </Col>
        </Row>
        <ContactForm />
      </Container>
    </>
  );
};

export default ContactUsScreen;
