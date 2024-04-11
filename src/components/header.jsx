import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleCreateEventClick = () => {
    navigate("/create-event-form");
  };

  const handleEventList = () => {
    navigate("/donation-event-list");
  };

  return (
    <div className="sticky-top">
      <Navbar expand="lg" style={{ backgroundColor: "#FFD230" }}>
        <Container fluid>
          <Navbar.Brand as="a" href="/">
            <img
              src="/image.png"
              alt="Your Logo"
              height={30}
              className="d-inline-block align-top"
            />

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
                <Nav.Link onClick={handleCreateEventClick}>Create Event</Nav.Link>
                <Nav.Link onClick={handleEventList}>Event List</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary" className="me-2">
                Search
              </Button>

              <Button variant="outline-success">Login</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
