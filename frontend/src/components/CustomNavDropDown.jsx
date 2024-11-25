import React from "react";
import { NavDropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CustomNavDropDown = ({ title, data }) => {
  return (
    <NavDropdown
      title={`${title}`}
      id="activitiesDropdown"
      className="activities-dropdown"
    >
      <div className="activities-list">
        {data.map((activity, index) => (
          <LinkContainer
            key={index}
            to={`/${title.toLowerCase()}/${activity
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            <NavDropdown.Item>{activity}</NavDropdown.Item>
          </LinkContainer>
        ))}
      </div>
      <div className="explore-all-button">
        <LinkContainer to="/activities">
          <Button variant="link">Explore All</Button>
        </LinkContainer>
      </div>
    </NavDropdown>
  );
};

export default CustomNavDropDown;
