import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const LocationInfo = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col lg={6} className="left-section mb-4">
          <h1
            className="mb-4"
            style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          >
            Learn About This Location...
          </h1>
          <p>
            Surrounded by ice-capped mountains of the Himalayan ranges and
            Karakoram, and with endless stretches of natural beauty, Leh Ladakh
            is the perfect getaway if you want to experience a new culture and
            environment.
          </p>
          <p>
            To truly experience the rich culture and the beautiful landscape,
            you should never miss out on a trip to Ladakh with our esteemed Leh
            Ladakh Tour packages. You can visit places like Pangong Lake, Diskit
            Monastery, Royal Leh Palace, Nubra Valley, Tsomoriri Lake, Khardung
            La, Indus and Zanskar River Sanga, and more.
          </p>
        </Col>
        <Col lg={6} className="right-section">
          <div className="faq-section">
            <h2
              className="mb-4"
              style={{ fontSize: "2rem", fontWeight: "bold" }}
            >
              General FAQs
            </h2>
            <Accordion
              className="custom-accordion"
              defaultActiveKey={["0"]}
              alwaysOpen
            >
              {[
                {
                  question:
                    "How long does it take to get adapted to weather in Ladakh?",
                  answer:
                    "Taking rest for a day or two to get yourself acclimatized is always recommended. Avoid strenuous activity during the first few days.",
                },
                {
                  question:
                    "What is the minimum period needed to fully explore Leh Ladakh?",
                  answer:
                    "A minimum of 7-10 days is required to experience the core attractions of Leh Ladakh.",
                },
                {
                  question: "How can I pay for my travel?",
                  answer:
                    "Payments can be made online through credit card, debit card, or net banking.",
                },
                {
                  question: "Can we bring children to our trip to Leh Ladakh?",
                  answer:
                    "Yes, you can bring children, but ensure they are medically fit for the high altitude.",
                },
                {
                  question: "Should I visit Leh Ladakh during winters?",
                  answer:
                    "Winters are harsh but beautiful. It is ideal for adventure enthusiasts seeking snow treks.",
                },
                {
                  question:
                    "Will there be any briefing session before we start our tour?",
                  answer:
                    "Yes, all tours include a briefing session to ensure you are well-prepared for the trip.",
                },
              ].map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LocationInfo;
