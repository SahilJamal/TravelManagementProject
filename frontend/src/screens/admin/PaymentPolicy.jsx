import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

const PaymentPolicy = () => {
  return (
    <Container className="mt-4rem fs-6" style={{ fontWeight: "400" }}>
      <Row>
        <Col lg={12} style={{ display: "grid", gap: "0.5rem" }}>
          <h4>Payment Policy</h4>

          <p>PAY SAFELY WITH US</p>
          <p>
            The payment is encrypted and transmitted securely with an SSL
            protocol.
          </p>

          <p>
            You need to register for your trek directly from the website. Once
            you make the payment, you will automatically receive an invoice
            directly in your mail-id. We will also get an intimation of the
            same.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col style={{ display: "grid", gap: "1rem" }}>
          <h4>Online Payment Method</h4>
          <li>
            You can pay via Debit card/ Credit Card, Net Banking & UPI id.
          </li>
          <p>
            Initial booking amount should be paid in advance according to the
            following laws.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} style={{ display: "grid", gap: "1rem" }}>
          <h5>Weekend Getaways - 1 Night/2 days, 2 Nights/3 days</h5>
          <li>2000/3000 INR per person is the booking amount</li>
          <li>The Complete amount to be paid by Wednesday evening.</li>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6} style={{ display: "grid", gap: "1rem" }}>
          <h5>Long Trips and Treks</h5>
          <li>4000/5000 INR per person is the booking amount</li>
          <li>
            75% of the trip/trek cost to be paid 20 days before the trip
            departure date.
          </li>
          <li>
            100% of the trip/trek cost to be paid 10 days before the trip
            departure date.
          </li>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col style={{ display: "grid", gap: "1rem" }}>
          <h5>Independent Treks</h5>
          <li>50% of the trip amount to be paid as booking amount</li>
          <li>Remaining 25% to be paid 30 days before the departure date</li>
          <li>Full amount to be paid 25 days before the departure date.</li>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <p>
            Payment to be made either to Company Account or through a payment
            gateway or via UPI. Details below:
          </p>
          <Table className="transparent-table" bordered hover>
            <tbody>
              <tr>
                <td className="p-3 text-start">Name</td>
                <td className="p-3 text-start">INDIANTREKS</td>
              </tr>
              <tr>
                <td className="p-3 text-start">Bank</td>
                <td className="p-3 text-start">STATE BANK OF INDIA</td>
              </tr>
              <tr>
                <td className="p-3 text-start">Account Type</td>
                <td className="p-3 text-start">CURRENT</td>
              </tr>
              <tr>
                <td className="p-3 text-start">Account Number</td>
                <td className="p-3 text-start">40554281367</td>
              </tr>
              <tr>
                <td className="p-3 text-start">IFSC Code</td>
                <td className="p-3 text-start">SBIN0018979</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <p>
            Payment to be made either to Company Account or through a payment
            gateway or via UPI. Details below:
          </p>
          <Table className="transparent-table" bordered hover>
            <tbody>
              <tr>
                <td className="p-3 text-start"></td>
                <td className="p-3 text-start">BHIM SBI PAY</td>
                <td className="p-3 text-start">PAYTM</td>
                <td className="p-3 text-start">PHONE PE</td>
              </tr>
              <tr>
                <td className="p-3 text-start">UPI Id / Phone No.</td>
                <td className="p-3 text-start">INDIANTREKS@SBI</td>
                <td className="p-3 text-start">7310954451</td>
                <td className="p-3 text-start">7310954451</td>
              </tr>
              <tr>
                <td className="p-3 text-start">QR Code</td>
                <td className="p-3 text-start">
                  <img
                    src="https://indiantreks.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-19-at-23.47.10-150x150.jpg"
                    alt="Qr Code"
                    width="102px"
                    height="95px"
                  />
                </td>
                <td className="p-3 text-start" width="158px">
                  <img
                    src="https://indiantreks.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-19-at-23.47.11-e1679250136292-300x282.jpg"
                    alt="Qr Code"
                    width="102px"
                    height="95px"
                  />
                </td>
                <td className="p-3 text-start"></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Cancellation Policy Section */}
      <Row className="mt-4">
        <Col>
          <h4>Cancellation Policy</h4>
          <p>
            No cancellations will be taken over call or WhatsApp. Please reply
            to the email{" "}
            <a href="mailto:exploreindiantreks@gmail.com">
              exploreindiantreks@gmail.com
            </a>{" "}
            of the payment receipt that you have received at the time of
            booking.
          </p>
          <h5>Trips and Treks – 4 Night / 5 Days and above</h5>
          <ul>
            <li>Free Cancellation up to 60 days before the departure date</li>
            <li>
              59 Days to 45 days of Departure date: 10% of total Trip cost.
              (Booking amount is non-refundable)
            </li>
            <li>
              44 Days to 30 Days of Departure date: 25% of the total trip cost
            </li>
            <li>
              29 Days to 15 Days of Departure date: 50% of the total trip cost.
            </li>
            <li>
              15 Days to 8 Days of Departure date: 75% of the total trip cost.
            </li>
            <li>7 Days to Trip Departure date: 100% of the total trip cost.</li>
            <li>No Show: No refund.</li>
          </ul>
        </Col>
      </Row>

      {/* Transportation Section */}
      <Row className="mt-4">
        <Col>
          <h4>Transportation</h4>
          <p>
            Along with the trek services, we also provide transportation
            services to and fro to the basecamp from the nearest city with a
            railway station or airport. Also, we offer a few gears on rent.
          </p>
          <p>
            While registering for a trek, you need to book with your trek fee
            only. Once the registration is done, your trek is confirmed.
          </p>
          <p>
            Regarding your transportation and rental gears, we will be reaching
            you 15 days before your trek date. These services are optional. You
            can either confirm them with us or make the arrangements at your
            end.
          </p>
          <p>
            Note: All services are subject to payment confirmation only. Also,
            these are subject to availability, so timely confirmation will be
            expected from your side in response to our Rental and transportation
            email.
          </p>
          <p>
            In case of government orders, harsh weather conditions, protests,
            landslides, or any other unforeseen circumstances, we will work out
            the best possible alternate plans or trips/treks. At times even
            certain activities are canceled, and the organization provides the
            best alternate but no refunds are provided.
          </p>
          <p>
            All travelers are requested to stay connected to our WhatsApp group
            before and during the trek for timely information.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPolicy;
