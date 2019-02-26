import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export default class BeerCardList extends Component {
  constructor(props) {
    super(props);
    this.state = { beerList: [{ name: "FritzBier" }, { name: "GraceBier" }] }
  }

  renderCards() {
    return this.state.beerList.map(({ name }) => {
      return (
        <Col lg="3">{name}</Col>
      );
    });
  }

  render() {
    return (
      <Row>
        <Col lg={{ offset: 1, span: 10 }}>
          <Row>
            {this.renderCards()}
          </Row>
        </Col>
      </Row>
    )
  }
}