import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "",
    query: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate phone number
    if (name === "phone") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }

      if (value.length < 10) {
        setError("Phone number must be exactly 10 digits");
      } else if (value.length > 10) {
        setError("Phone number cannot be more than 10 digits");
      } else {
        setError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailTemplateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      category: formData.category,
      query: formData.query,
    };

    // EmailJS service call
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID, // Replace with your EmailJS service ID
        process.env.REACT_APP_EMAIL_TEMPLATE_ID, // Replace with your EmailJS template ID
        emailTemplateParams,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log(
            "Email successfully sent!",
            response.status,
            response.text
          );
          toast.success(
            "Your query has been sent! We'll get back to you soon."
          );
        },
        (error) => {
          console.error("Failed to send email. Error:", error);
          setError("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="form-container bg-light p-4 rounded mb-4 mt-4rem">
      <Container>
        <Row>
          <Col md={6}>
            <div className="image-container">
              <img
                src="https://imgs.search.brave.com/DEzvBTVyp0VMeLWE5He6K9FRM4EEUDk1GiDng6xI5M8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGRkw4/Y0xnVFkvMS8wLzEx/MzF3L2NhbnZhLXBp/bmstc2ltcGxlLXRy/YXZlbC1waHJhc2Ut/cG9zdGVyLUg1VjNH/Q3YyX3RjLmpwZw"
                alt="Travel illustration"
                className="img-fluid rounded"
              />
            </div>
          </Col>
          <Col md={6}>
            <h2 className="mb-4">Don't Think Just Ask!</h2>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">🇮🇳 +91</span>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="10"
                    required
                  />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}{" "}
                {/* Display error message */}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>What are you Looking For?</Form.Label>
                <Form.Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="adventure">Adventure Travel</option>
                  <option value="culture">Cultural Experience</option>
                  <option value="relaxation">Relaxation</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your Query</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                type="submit"
                className="w-100 submit-button"
                disabled={error}
              >
                See You in the Mountains!
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
