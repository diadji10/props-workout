import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Player = ({
  nom = "néant",
  equipe = "Non définie",
  nation = "aucune",
  photo,
  age = "xxx ans",
}) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{nom}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{nation}</ListGroup.Item>
          <ListGroup.Item>{equipe}</ListGroup.Item>
          <ListGroup.Item>{age}</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default Player;
