import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ProfilePicture from '../../../img/default-profile.png';
// import { auth } from '../../../firebase/index';

const UserInfo = () => {
  return (
    <Container className="user-info">
      <Row>
        <Col md={4} className="user-picture">
          <img src={ProfilePicture} alt="" />
        </Col>
        <Col md={8}>
          <h5>Sofía</h5>
        </Col>   
      </Row>
    </Container>
  );
};


export default UserInfo;