import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <div
      className="newsletter-signup mt-4rem"
      style={{
        backgroundImage:
          'url("https://www.justwravel.com/_next/static/media/subscriptionImage.75d92937.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Container fluid>
        <Row className=" align-items-center">
          <Col xs={12} md={6} className="text-white p-5">
            <h6 className="text-uppercase mb-3">NEWSLETTER</h6>
            <h2 className="mb-4">Sign up now!</h2>
            <p className="mb-4">
              Be the first one to know all about the Exciting Offers, Travel
              Updates and more.
            </p>
            <Form onSubmit={handleSubmit} className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-pill me-2"
                style={{ flex: 1 }}
              />
              <Button type="submit" variant="primary" className="rounded-pill">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsletterSignup;
