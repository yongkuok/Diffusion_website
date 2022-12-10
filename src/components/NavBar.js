import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

//className="navbar navbar-dark bg-dark justify-content-md-center"

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#/" style={{ font: "Copperplate" }}>
          <h2>AMK Diffusion</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/">Home</Nav.Link>

            <NavDropdown title="Organisation" id="basic-nav-dropdown">
              <NavDropdown.Item href="#/organisation/process">
                Process
              </NavDropdown.Item>
              <NavDropdown.Item href="#/organisation/equipment">
                Equipment
              </NavDropdown.Item>
              <NavDropdown.Item href="#/organisation/projectsAndQuality">
                Projects and Quality
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#/usefulLinks">Useful Links</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
