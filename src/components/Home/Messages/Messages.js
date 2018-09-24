import React from 'react';
import { Row, Col } from 'react-grid-system';

const Messages  = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 0,
  //   };
  // }

  // this.state.text.bind(this);
  // this.state.counter.bind(this);
  // this.state.creator.bind(this);
  // this.state.date.bind(this);

  // likesCounter() {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   });
  // }

    return (
      <Col md={12} className="messages">
        <Row>
          <Col md={3}>
            <p>Hola soy una imagen</p>
          </Col>
          <Col md={9}>
            <p>{props.creator}</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <textarea disabled className="materialize-textarea" value={props.text} />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <button type="button" className="post-btn">
              <i className="fas fa-heartbeat" />
            </button>
            <p>counter</p>
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