import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import BeerCard from './BeerCard';

export default class BeerCardList extends Component {
  constructor(props) {
    super(props);
    this.state = { beerList: [{ name: "Punk IPA 2007 - 2010", imageUrl: "https://images.punkapi.com/v2/192.png", tagline: "Post Modern Classic. Spiky. Tropical. Hoppy." }, { name: "GraceBier" }] }
  }

  renderCards() {
    return this.state.beerList.map(({ name, imageUrl, tagline }) => {
      return (
        <BeerCard name={name} key={name} imageUrl={imageUrl} tagline={tagline} />
      );
    });
  }

  render() {
    return (
      <Row>
        {this.renderCards()}
      </Row>
    );
  }
}



export default connect()(BeerCardList);