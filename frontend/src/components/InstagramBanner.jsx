import React from "react";
import { Container } from "react-bootstrap";

const InstagramBanner = () => {
  return (
    <Container className="instagram-banner">
      <div className="banner-content">
        <h1 className="instagram-handle">@International Youth Club</h1>
        <p className="follow-text">
          Follow Us On <span className="instagram-text">Instagram</span>
        </p>
      </div>
    </Container>
  );
};

export default InstagramBanner;
