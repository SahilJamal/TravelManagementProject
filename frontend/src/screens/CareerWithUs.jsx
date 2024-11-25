import React, { useState } from "react";
import { ContactForm } from "../components/ContactForm";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { RiDownloadCloudFill } from "react-icons/ri";

const CareerWithUs = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      width: 30,
    },
    {
      src: "https://images.unsplash.com/photo-1504598318550-17eba1008a68?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      width: 15,
    },
    {
      src: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      width: 35,
    },
    {
      src: "https://images.unsplash.com/photo-1504598318550-17eba1008a68?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      width: 15,
    },
    // Add more images as needed, alternating widths
  ];

  const cardData = [
    {
      id: 1,
      imgSrc: "https://via.placeholder.com/150",
      description: "Vancouver Mountains, Canada",
      title: "The Great Path",
    },
    {
      id: 2,
      imgSrc: "https://via.placeholder.com/150",
      description: "Poon Hill, Nepal",
      title: "Starry Night",
    },
    {
      id: 3,
      imgSrc: "https://via.placeholder.com/150",
      description: "Bojcin Forest, Serbia",
      title: "Path Of Peace",
    },
    {
      id: 4,
      imgSrc: "https://via.placeholder.com/150",
      description: "Vancouver Mountains, Canada",
      title: "The Great Path",
    },
    {
      id: 5,
      imgSrc: "https://via.placeholder.com/150",
      description: "Poon Hill, Nepal",
      title: "Starry Night",
    },
    {
      id: 6,
      imgSrc: "https://via.placeholder.com/150",
      description: "Bojcin Forest, Serbia",
      title: "Path Of Peace",
    },
  ];

  const quaility = [
    {
      id: 1,
      title: "5 Days",
      text: "Working",
      imgurl: "https://storage.justwravel.com/career/perks/1.png",
    },
    {
      id: 2,
      title: "Life",
      text: "Insurance",
      imgurl: "https://storage.justwravel.com/career/perks/2.png",
    },
    {
      id: 3,
      title: "Monthly",
      text: "R&R",
      imgurl: "https://storage.justwravel.com/career/perks/3.png",
    },
    {
      id: 4,
      title: "Quarterly",
      text: "Outings",
      imgurl: "https://storage.justwravel.com/career/perks/4.png",
    },
    {
      id: 5,
      title: "Peaceful",
      text: "Culture",
      imgurl: "https://storage.justwravel.com/career/perks/5.png",
    },
  ];
  return (
    <>
      <div
        style={{
          marginTop: "3.3rem",
          width: "100% !important",
          minHeight: "75vh",
          marginBottom: "-100px", // Use a valid negative pixel value
        }}
      >
        <Carousel
          controls={false}
          indicators={false}
          interval={4000}
          pause={false}
          style={{ minHeight: "75vh" }} // Removed !important
        >
          <Carousel.Item>
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
          </Carousel.Item>

          <Carousel.Item>
            <img
              loading="lazy"
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45"
              alt="Second slide"
              style={{
                height: "75vh",
                objectFit: "cover",
                borderRadius: "30px",
              }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              loading="lazy"
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              alt="Third slide"
              style={{
                height: "75vh",
                objectFit: "cover",
                borderRadius: "30px",
              }}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <Container className="">
        <Row className="justify-content-center text-center mb-4">
          <Col lg={12}>
            <h1 className="display-4 fw-5">
              Where{" "}
              <span
                className="fw-bold"
                style={{ color: `var(--secondary-color) !important` }}
              >
                Adventure
              </span>{" "}
              Meets <span className="fw-bold">Opportunity</span>
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col lg={12}>
            <p className="lead mb-4">
              We are a vibrant{" "}
              <span className="fw-bold">Social Travel Community</span> that
              brings like-minded explorers together through meticulously
              organized trips and fixed departures. If you’re eager to make a
              difference in the travel industry and help others create
              unforgettable memories, you’ve come to the right place!
            </p>
          </Col>
        </Row>

        {/* Card */}

        <div
          className="card-container d-flex justify-content-center align-items-center py-5"
          style={{ marginBottom: "-200px" }}
        >
          <Carousel
            indicators={false}
            controls={false}
            interval={2000}
            pauseOnHover={true}
            className="w-100"
          >
            {Array.from({ length: Math.ceil(cardData.length / 3) }).map(
              (_, carouselIndex) => (
                <Carousel.Item key={carouselIndex}>
                  <Row className="w-100 g-3">
                    {cardData
                      .slice(carouselIndex * 3, carouselIndex * 3 + 3)
                      .map((landscape, index) => (
                        <Col key={index} lg={4} md={6} sm={12}>
                          <Card className="card-article">
                            <Card.Img
                              variant="top"
                              src={landscape.imgSrc}
                              className="card-img"
                            />
                            <Card.Body className="card-data">
                              <Card.Text className="card-description">
                                {landscape.description}
                              </Card.Text>
                              <Card.Title className="card-title">
                                {landscape.title}
                              </Card.Title>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                  </Row>
                </Carousel.Item>
              )
            )}
          </Carousel>
        </div>
        {/* card */}

        {/* Marquee */}
        <div className="container">
          <Marquee
            speed={60}
            pauseOnHover={true}
            gradient={false}
            className="my-3"
            style={{ height: "15rem" }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`img-${index}`}
                style={{
                  width: `${image.width}rem`,
                  height: "15rem",
                  objectFit: "cover",
                  borderRadius: "30px",
                }}
                className="mx-2"
              />
            ))}
          </Marquee>
        </div>
        <div className="container">
          <Marquee
            pauseOnHover={true}
            speed={60}
            gradient={false}
            className="my-3"
            style={{ height: "15rem" }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`img-${index}`}
                style={{
                  width: `${image.width}rem`,
                  height: "15rem",
                  objectFit: "cover",
                  borderRadius: "30px",
                }}
                className="mx-2"
              />
            ))}
          </Marquee>
        </div>
        {/* Marque */}

        {/* quality */}

        <Row className="justify-content-center mt-4rem">
          <Col xs={12} className="text-center mb-5">
            <h1>
              The Best{" "}
              <span
                className="fw-bold"
                style={{ color: `var(--secondary-color)` }}
              >
                Company
              </span>{" "}
              = The Best{" "}
              <span
                className="fw-bold"
                style={{ color: `var(--secondary-color)` }}
              >
                Perks
              </span>
            </h1>
          </Col>
          {quaility.map((quality) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={2}
              className="d-flex justify-content-center mx-3 mb-4"
              key={quality.id}
            >
              <Card className="text-center">
                <Card.Img variant="top" src={quality.imgurl} loading="lazy" />
                <Card.Body>
                  <Card.Title>
                    <span
                      className="d-block"
                      style={{ color: `var(--secondary-color)` }}
                    >
                      {quality.title}
                    </span>
                    {quality.text}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* quality */}

        <Row className="justify-content-center mt-4rem">
          <Col xs={12} className="text-center">
            <h1>
              Start your career with U
              <span
                className="fw-bold"
                style={{ color: `var(--secondary-color)` }}
              >
                S!
              </span>
            </h1>
          </Col>
          <Col xs={8} className="text-center">
            <p>
              Hey there, future travel mavens! If you’re an intern or freelancer
              looking to dive into the world of travel, we’ve got some exciting
              opportunities for you. Join our Fun Squad and work on cool
              projects while exploring new horizons.
            </p>
          </Col>
          <Col>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CareerWithUs;
