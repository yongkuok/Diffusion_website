import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Subsection from "./Subsection";

const Section = (props) => {
  return (
    <Card style={{ textAlign: "left", margin: "30px 0px" }}>
      <Card.Header>{props?.title}</Card.Header>

      <ListGroup>
        {props.links?.map((i) =>
          Array.isArray(i.href) ? (
            <ListGroup.Item
              action
              key={i.name}
              name={i.name}
              value={i.href}
              onClick={props.modalShow}
            >
              {i.name}
              {/* <Subsection
                name={i.name}
                show={modalShow}
                onHide={() => setModalShow(false)}
                onClose={() => setModalShow(false)}
              ></Subsection> */}
            </ListGroup.Item>
          ) : (
            <ListGroup.Item action href={i.href} key={i.name}>
              {i.name}
            </ListGroup.Item>
          )
        )}
      </ListGroup>
    </Card>
  );
};

export default Section;
