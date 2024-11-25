import React, { useState } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState("why-us");
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const servicesData = {
    "why-us": {
      title: "Why Choose Us",
      items: [
        {
          icon: "🌍",
          title: "Experienced Staff",
          description:
            "Our friendly consultants travel regularly & offer first-hand advice to help you settle for nothing but the best!",
        },
        {
          icon: "😊",
          title: "Hassle-free Experience",
          description:
            "We coordinate your travel so flights, transfers & tours all connect smoothly and you just relax and enjoy your journey.",
        },
        {
          icon: "✈️",
          title: "Trusted by Travelers",
          description:
            "We have conducted more than 10,000+ tours. So rest assured, you're with an expert.",
        },
      ],
    },
    "our-services": {
      title: "Our Services",
      items: [
        {
          icon: "🏨",
          title: "Hotel Bookings",
          description:
            "Find the perfect accommodation for your journey, from luxury resorts to cozy boutique hotels.",
        },
        {
          icon: "🚗",
          title: "Transportation",
          description:
            "Seamless transfers between destinations with our reliable transportation partners.",
        },
        {
          icon: "🎫",
          title: "Tour Packages",
          description:
            "Curated experiences that showcase the best of each destination you visit.",
        },
      ],
    },
    "our-story": {
      title: "Our Story",
      items: [
        {
          icon: "📚",
          title: "20 Years of Excellence",
          description:
            "Two decades of creating unforgettable travel experiences for our valued clients.",
        },
        {
          icon: "🤝",
          title: "Local Partnerships",
          description:
            "Strong relationships with local providers to offer authentic experiences.",
        },
        {
          icon: "🏆",
          title: "Award-Winning Service",
          description:
            "Recognized for our commitment to exceptional customer satisfaction.",
        },
      ],
    },
    faqs: {
      title: "Frequently Asked Questions",
      items: [
        {
          icon: "❓",
          title: "Booking Process",
          description:
            "Simple and secure booking with 24/7 customer support for your peace of mind.",
        },
        {
          icon: "💰",
          title: "Pricing & Payments",
          description:
            "Transparent pricing with no hidden fees. Multiple payment options available.",
        },
        {
          icon: "📅",
          title: "Cancellation Policy",
          description:
            "Flexible cancellation options to accommodate unexpected changes in your plans.",
        },
      ],
    },
  };

  const styles = {
    container: {
      padding: isMobile ? "1rem" : "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
      marginTop: "4rem",
    },
    sideNav: {
      backgroundColor: "#f8f9fa",
      borderRadius: "10px",
      padding: "1rem",
      marginBottom: isMobile ? "1rem" : 0,
    },
    navLink: {
      color: "#666",
      padding: isMobile ? "0.5rem" : "1rem",
      display: "block",
      cursor: "pointer",
      transition: "all 0.3s ease",
      borderRadius: "5px",
      marginBottom: "0.5rem",
    },
    activeNavLink: {
      backgroundColor: "#4CAF50",
      color: "white",
    },
    contentSection: {
      padding: isMobile ? "1rem 0" : "0 2rem",
    },
    mainTitle: {
      fontSize: isMobile ? "1.8rem" : "2.5rem",
      marginBottom: isMobile ? "1rem" : "2rem",
      fontWeight: "bold",
    },
    itemsGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(280px, 1fr))",
      gap: isMobile ? "1rem" : "2rem",
    },
    itemCard: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: isMobile ? "1rem" : "2rem",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease",
      cursor: "pointer",
      "&:hover": {
        transform: "translateY(-5px)",
      },
    },
    icon: {
      fontSize: isMobile ? "1.5rem" : "2rem",
      marginBottom: "1rem",
    },
    itemTitle: {
      fontSize: isMobile ? "1.1rem" : "1.25rem",
      marginBottom: "1rem",
      fontWeight: "bold",
    },
    description: {
      color: "#666",
      lineHeight: "1.6",
      fontSize: isMobile ? "0.9rem" : "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        <Row>
          <Col xs={12} md={3}>
            <Nav
              variant="pills"
              className={isMobile ? "flex-row flex-wrap" : "flex-column"}
              style={styles.sideNav}
            >
              {Object.keys(servicesData).map((key) => (
                <Nav.Item key={key} className={isMobile ? "flex-grow-1" : ""}>
                  <Nav.Link
                    eventKey={key}
                    style={{
                      ...styles.navLink,
                      ...(activeTab === key ? styles.activeNavLink : {}),
                    }}
                  >
                    {servicesData[key].title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col xs={12} md={9} style={styles.contentSection}>
            <Tab.Content>
              {Object.keys(servicesData).map((key) => (
                <Tab.Pane eventKey={key} key={key}>
                  <h2 style={styles.mainTitle}>{servicesData[key].title}</h2>
                  <div style={styles.itemsGrid}>
                    {servicesData[key].items.map((item, index) => (
                      <div key={index} style={styles.itemCard}>
                        <div style={styles.icon}>{item.icon}</div>
                        <h3 style={styles.itemTitle}>{item.title}</h3>
                        <p style={styles.description}>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default ServicesTabs;
