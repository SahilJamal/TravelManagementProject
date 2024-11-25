import React from "react";
import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { FaPhone, FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../slices/authSlice";
import { resetCart } from "../slices/cartSlice";
import { useLogoutMutation } from "../slices/usersApiSlice";
import CustomNavDropDown from "./CustomNavDropDown";
const activities = [
  "Bungee Jumping",
  "Camping",
  "River Rafting",
  "Motor Biking",
  "Mountain Biking",
  "Paragliding",
  "Scuba Diving",
  "Trekking",
  "Water Activities",
];

const themes = [
  "Ladakh Tour Package",
  "Motorbiking tours",
  "College Tours",
  "Family Tours",
  "School Tours",
];
export default function Header() {
  // const { userInformation } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log("userInformation", userInformation);
  const [logoutApiCall] = useLogoutMutation();
  // eslint-disable-next-line no-unused-vars
  const logoutHandler = async () => {
    console.log("Logged Out");
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart());
      toast.success("Logged Out Successfully");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.log("error", error);
      toast.error(error?.data?.message || error?.error);
    }
  };

  const destinations = {
    "Most Popular": ["Leh Ladakh", "Kashmir", "Meghalaya", "Manali"],
    "Best Seller": ["Uttarakhand"],
    Famous: ["Himachal"],
  };
  return (
    <>
      <Navbar expand="lg" className={`custom-navbar scrolled`}>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src="/logo192.png" alt="Trippy India" className="logo" />
              <img
                src="/images/TrippyIndiaLogoTextBlackHorizontal.png"
                alt="Trippy India With Text"
                className="logo"
                style={{ marginLeft: "10px" }}
              />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="navbarContent" />

          <Navbar.Collapse id="navbarContent">
            <Nav className="mx-auto">
              <NavDropdown
                title="Destinations"
                id="navbarDropdown"
                className="custom-dropdown"
              >
                <div className="dropdown-grid">
                  <Row>
                    {Object.entries(destinations).map(([category, places]) => (
                      <Col key={category} md={4}>
                        <h6>{category}</h6>
                        <ul>
                          {places.map((place, index) => (
                            <li key={index}>
                              <LinkContainer
                                to={`/destination/${place
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                              >
                                <NavDropdown.Item as="a">
                                  {place}
                                </NavDropdown.Item>
                              </LinkContainer>
                            </li>
                          ))}
                        </ul>
                      </Col>
                    ))}
                  </Row>
                </div>
              </NavDropdown>
              <CustomNavDropDown title={"Activities"} data={activities} />
              <CustomNavDropDown title={"Themes"} data={themes} />

              <NavDropdown title="More" id="navbarDropdown">
                <LinkContainer to="/blog">
                  <NavDropdown.Item>Blog</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/career">
                  <NavDropdown.Item>Work with us</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <NavDropdown.Item>Contact Us</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/about">
                  <NavDropdown.Item>About Us</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/category/all-girls">
                  <NavDropdown.Item>All Girls Trips</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/category/corporate">
                  <NavDropdown.Item>Corporate Trips</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>

            <div className="nav-end-section">
              <div className="phone-number">
                <a
                  href="tel:+91-7999817080"
                  onclick="window.open('tel:+91-7999817080')"
                  style={{ textDecoration: "none" }} // Add this style
                >
                  <FaPhone size={20} color="#009846" />
                  <span
                    style={{
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    +91-799981708
                  </span>
                </a>
              </div>
              <Button className="login-btn">Login</Button>
              <Button variant="link" className="search-btn">
                <FaSearch size={20} color="#009846" />
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <style>{`
        .custom-navbar {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          z-index: 999 !important;
          transition: all 0.3s ease !important;
          background-color: transparent !important;
        }

        .custom-navbar.scrolled {
          background-color: rgba(255, 255, 255, 0.9) !important;
          backdrop-filter: blur(5px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }


        .nav-end-section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .phone-number {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        @media (max-width: 992px) {
          .early-bird-wrapper {
            margin-bottom: 1rem;
          }
          
          .nav-end-section {
            margin-top: 1rem;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
}
