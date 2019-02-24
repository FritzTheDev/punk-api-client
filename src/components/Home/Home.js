import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Searchbar from './components/Searchbar';
const Home = () => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Searchbar />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;