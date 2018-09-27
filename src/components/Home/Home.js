import React from 'react';
import { Container, Row } from 'react-grid-system';
import Header from '../Header/Header';
import Publish from './Publish/Publish';
import './style.css';
import Navbar from '../Navbar/Navbar';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Container className="wall">
        <Row>
          <Header name='MURO' />
        </Row>
        <Row className="publications">
          <Publish />
        </Row>
      </Container>
    </div>
  );
};

export default Home;