import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Searchbar from './components/Searchbar';
import BeerCardList from './components/BeerCardList';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Searchbar />
                </Col>
            </Row>
            <BeerCardList />
        </Container>
    )
}

export default Home;