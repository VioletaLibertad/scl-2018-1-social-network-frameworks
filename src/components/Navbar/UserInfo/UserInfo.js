import React, { Component } from 'react';
import ProfilePicture from '../../../img/default-profile.png';
import { Container, Row, Col } from 'react-grid-system';

class UserInfo extends Component {
  render() {
    return (
      <Container className="user-info">
        <Row>
          <Col md={4} className="user-picture">
            <img src={ProfilePicture} alt=""/>
          </Col>
          <Col md={8}>
            <h5>NOMBRE</h5>
          </Col>   
        </Row>
      </Container>
    );
  }
};


export default UserInfo;