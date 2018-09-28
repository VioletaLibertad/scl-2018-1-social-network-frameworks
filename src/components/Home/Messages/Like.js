import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { Col } from 'react-grid-system';

class Like extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0
    };
  }

  likePost(event) {
    event.target.style.color = 'red';
    this.setState({
      likes: this.state.likes + 1
    });
  }

  render() {
    return (
      <Col md={3}>
        <Button className="post-btn">
          <i id="heartBtn" onClick={this.likePost.bind(this)} className="fas fa-heartbeat" />
        </Button>
        <span>{this.state.likes}</span>
      </Col>
    );
  }
}

export default Like;