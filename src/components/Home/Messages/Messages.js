import React from 'react';
import { Row, Col } from 'react-grid-system';
import ProfilePicture from '../../../img/default-profile.png';
import Like from './Like';
import Edit from './Edit';
import Delete from './Delete';

const Messages = (props) => {
  return (
    <Col md={12} className="messages" key={props.id} id={props.id}>
      <Row>
        <Col md={12} className="creator-info">
          <img src={ProfilePicture} alt="" className="picture" />
          <p>{props.creator}</p>
          <p>{props.date}</p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <textarea data-target={props.id} disabled className="materialize-textarea" value={props.text} />
        </Col>
      </Row>
      <Row>
        <Like />
        <Col md={3} offset={{ md: 6 }}>
          <Edit />
          <Delete element={props.id} />
        </Col>
      </Row>
    </Col>
  );
};

export default Messages;