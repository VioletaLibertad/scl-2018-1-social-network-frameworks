import React from 'react';
import { Row, Col } from 'react-grid-system';
import ProfilePicture from '../../../img/default-profile.png';

const Messages = (props) => {
  return (
    <Col md={12} className="messages">
      <Row>
        <Col md={12} className="creator-info">
          <img src={ProfilePicture} alt="" className="picture" />
          <p>{props.creator}</p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <textarea id={props.id} disabled className="materialize-textarea" value={props.text} />
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <button type="button" className="post-btn">
            <i className="fas fa-heartbeat" />
            <span>{props.counter}</span>
          </button>
        </Col>
        <Col md={3} offset={{ md: 6 }}>
          <button type="button" className="post-btn">
            <i className="fas fa-edit" />
          </button>
          <button type="button" className="post-btn">
            <i className="fas fa-trash-alt" />
          </button>
        </Col>
      </Row>
    </Col>
  );
};

export default Messages;