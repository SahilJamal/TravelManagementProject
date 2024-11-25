import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { useGetProductByCategoryNameQuery } from "../slices/productsApiSlice";
import CorporateOfferings from "../components/CorporateOfferings";
import TravelCardCarousel from "../components/TravelCardCarousel";
const features = [
  {
    title: "Customised\nItineraries",
    icon: <FaCalendarAlt className="text-primary" size={24} />,
  },
  {
    title: "Team Building\nActivities",
    icon: <FaCalendarAlt className="text-primary" size={24} />,
  },
  {
    title: "Employee Incentive\nProgram",
    icon: <FaCalendarAlt className="text-primary" size={24} />,
  },
];

const CorporateProgram = () => {
  const params = useLocation();
  const keyword = params.pathname.split("/").slice(-1).join("");
  const { data, isLoading } = useGetProductByCategoryNameQuery({
    category: keyword,
  });
  const newData =
    data && data?.Trips?.filter((item) => item?.category === keyword)?.[0];

  if (isLoading) return <Loader />;
  return (
    <Container className="corporate-tours py-5 mt-4">
      <h6 className="section-subtitle">{newData?.name}</h6>
      <Row className="align-items-center">
        <Col xs={12} md={6} lg={6}>
          <h2>Out Of Cubicles</h2>
          <p className="description">{newData?.description}</p>
          <Row className="features-row">
            {features.map((feature, index) => (
              <Col key={index} md={4}>
                <div className="feature-card">
                  <div className="icon-circle">{feature.icon}</div>
                  <h6 className="feature-title">{feature.title}</h6>
                  <Button variant="primary" className="feature-button">
                    Download
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <div className="image-container">
            <img
              src={"/uploads/corporate/images-1728214823720.png"}
              alt="Team building activities"
              className="img-fluid circle-image circle-image-1"
            />
            <img
              src="/uploads/corporate/images-1728214823756.jpg"
              alt="Outdoor activities"
              className="img-fluid circle-image circle-image-2"
            />
          </div>
        </Col>
      </Row>
      <CorporateOfferings />
      <TravelCardCarousel />
      <TravelCardCarousel />
    </Container>
  );
};

export default CorporateProgram;
