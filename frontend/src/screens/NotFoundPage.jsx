import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // assuming you're using react-router-dom for routing

const NotFoundPage = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center text-center error-page">
      <h1 className="error-code">404</h1>
      <p className="error-message">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/">
        <Button variant="success" className="error-button">
          Go Home
        </Button>
      </Link>
    </Container>
  );
};

export default NotFoundPage;
