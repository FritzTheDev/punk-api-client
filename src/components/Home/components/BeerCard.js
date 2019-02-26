import React from 'react';
import { Col, Card } from 'react-bootstrap';

const BeerCard = ({ name, id, tagline, imageUrl }) => {
  return (
    <Col lg="4">
      <Card>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Title className="text-center">{name}</Card.Title>
      </Card>
    </Col>
  )
}

export default BeerCard;