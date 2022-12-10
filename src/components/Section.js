import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Section = (props) => {
  const items = [{ name: "Item 1" }, { name: "Item 2" }];
  return (
    <Card style={{ "text-align": "left", margin: "30px 0px" }}>
      <Card.Header>Card Title</Card.Header>
      <ListGroup>
        {items.map((i) => (
          <ListGroup.Item key={i.name}>{i.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default Section;
