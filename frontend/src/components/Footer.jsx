import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarker,
  FaPhone,
  FaPinterestP,
  FaSpotify,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="gy-4">
          <Col lg={3} md={6} sm={12}>
            <div className="footer-brand">
              <img
                src="/images/TrippyIndiaVertical.png"
                alt="Travel Tour Logo"
                className="footer-logo"
              />
              <div className="social-icons-wrapper">
                <div className="social-icons">
                  <a href="/" className="social-icon" aria-label="Facebook">
                    <FaFacebookF size={18} color="black" />
                  </a>
                  <a href="/" className="social-icon" aria-label="Twitter">
                    <FaTwitter size={18} color="black" />
                  </a>
                  <a href="/" className="social-icon" aria-label="Instagram">
                    <FaInstagram size={18} color="black" />
                  </a>
                  <a href="/" className="social-icon" aria-label="LinkedIn">
                    <FaLinkedinIn size={18} color="black" />
                  </a>
                  <a href="/" className="social-icon" aria-label="YouTube">
                    <FaYoutube size={18} color="black" />
                  </a>
                </div>
                <div className="social-icons">
                  <a
                    href="/"
                    className="social-icon tripadvisor"
                    aria-label="TripAdvisor"
                  >
                    <FaPinterestP />
                  </a>
                  <a href="/" className="social-icon quora" aria-label="Quora">
                    Q
                  </a>
                  <a
                    href="/"
                    className="social-icon spotify"
                    aria-label="Spotify"
                  >
                    <FaSpotify />
                  </a>
                  <a
                    href="/"
                    className="social-icon google"
                    aria-label="Google"
                  >
                    <SiYoutubemusic />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6} sm={6} xs={6}>
            <div className="footer-links-wrapper">
              <h4>Company</h4>
              <ul className="footer-links">
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
                <li>
                  <a href="/">Our Blogs</a>
                </li>
                <li>
                  <a href="/career">Career With US</a>
                </li>
                <li>
                  <a href="/">Payment Policy</a>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={3} md={6} sm={6} xs={6}>
            <div className="footer-links-wrapper">
              <h4>Trips</h4>
              <ul className="footer-links">
                <li>
                  <a href="/">Backpacking Trips</a>
                </li>
                <li>
                  <a href="/">Treks</a>
                </li>
                <li>
                  <a href="/">Weekend Getaways</a>
                </li>
                <li>
                  <a href="/">Biking Trips</a>
                </li>
                <li>
                  <a href="/">Upcoming Trips</a>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={3} md={6} sm={12}>
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <address className="contact-info">
                <p>
                  <FaMapMarker size={16} className="contact-icon" />
                  <span>Dehradun Uttarakhand 248001</span>
                </p>
                <p>
                  <FaPhone size={16} className="contact-icon" />
                  <a
                    href="tel:+91-7999817080"
                    onclick="window.open('tel:+91-7999817080')"
                    style={{ textDecoration: "none" }}
                  >
                    <span
                      style={{
                        color: "black",
                        fontWeight: "600",
                      }}
                    >
                      +91-7999817080
                    </span>
                  </a>
                  /
                  <a
                    href="tel: +91-8979706723"
                    onclick="window.open('tel: +91-8979706723')"
                    style={{ textDecoration: "none" }} // Add this style
                  >
                    <span
                      style={{
                        color: "black",
                        fontWeight: "600",
                      }}
                    >
                      +91-8979706723
                    </span>
                  </a>
                </p>
                <p>
                  <MdEmail size={16} className="contact-icon" />
                  <a
                    href="mailto:trippyindiapvt.ltd@gmail.com"
                    style={{ textDecoration: "none" }}
                  >
                    <span style={{ textDecoration: "none", color: "black" }}>
                      trippyindiapvt.ltd@gmail.com
                    </span>
                  </a>
                </p>
              </address>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="footer-bottom align-items-center">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className="copyright-text">© 2015-2024 Trippy India</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="/" className="footer-bottom-link">
              Privacy Policy
            </a>
            <span className="separator">|</span>
            <a href="/" className="footer-bottom-link">
              Terms & Conditions
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
