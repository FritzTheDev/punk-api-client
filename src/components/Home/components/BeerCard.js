import React from 'react';
import { Col, Card } from 'react-bootstrap';

const BeerCard = ({ name, id, tagline, imageUrl }) => {
  return (
    <Col md="4">
      <Card bg="light" className="mt-4 pt-4">
        <Card.Img variant="top" src={imageUrl} style={{ height: "10%", width: "10%", alignSelf: "center" }} />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Subtitle className="text-center">{tagline}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default BeerCard;