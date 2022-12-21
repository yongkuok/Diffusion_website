import React, { useState } from "react";
import Slideshow from "./Slideshow";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section from "./Section";
import Subsection from "./Subsection";
//import AVP from "../links/AVPLinks.json" assert { type: "json" };

const Home = () => {
  let AVP = require("../links/AVPLinks.json");
  const [modalShow, setModalShow] = useState(false);
  return (
    <div style={{ height: "100vh" }}>
      <Subsection
        name="asd"
        show={modalShow}
        onHide={() => setModalShow(false)}
        onClose={() => setModalShow(false)}
      ></Subsection>
      <Container style={{ margin: "10px 40px" }}>
        <Row>
          <Col>
            <Section
              title={"AVP Meeting Agenda"}
              links={AVP.AVPLinks}
              modalShow={() => setModalShow(true)}
            />
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
