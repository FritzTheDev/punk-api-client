import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import BeerCard from './BeerCard';
import { loadBeers } from '../../../data/actions/beerActions';

class BeerCardList extends Component {
  constructor(props) {
    super(props);
    this.state = { beerList: [{ name: "Punk IPA 2007 - 2010", imageUrl: "https://images.punkapi.com/v2/192.png", tagline: "Post Modern Classic. Spiky. Tropical. Hoppy." }, { name: "GraceBier" }] }
  }
  componentDidMount() {
    console.log(this.props);
    this.props.loadBeers();
  }

  renderCards() {
    return this.props.beers.map(({ name, image_url, tagline }) => {
      return (
        <BeerCard name={name} key={name} imageUrl={image_url} tagline={tagline} />
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

const mapStateToProps = ({ beerReducer }, ownProps) => ({
  ...ownProps,
  beers: beerReducer.beers,
  loading: beerReducer.loading,
  error: beerReducer.error
});

const mapDispatchToProps = dispatch => {
  return {
    loadBeers: () => dispatch(loadBeers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerCardList);