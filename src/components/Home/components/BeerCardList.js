import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import BeerCard from './BeerCard';

export default class BeerCardList extends Component {
  constructor(props) {
    super(props);
    this.state = { beerList: [{ name: "Punk IPA 2007 - 2010" }, { name: "GraceBier" }] }
  }

  renderCards() {
    return this.state.beerList.map(({ name }) => {
      return (
        <BeerCard name={name} key={name} />
      );
    });
  }

  render() {
    return (
      <Row>
        {this.renderCards()}
      </Row>
    )
  }
}