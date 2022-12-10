import React from "react";
import Slideshow from "./Slideshow";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section from "./Section";

const Home = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Container style={{ margin: "10px 40px" }}>
        <Row>
          <Col>
            <Section />
            <Section />
          </Col>
          <Col>
            <Section />
          </Col>
          <Col>
            <Section />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
