import React, { Component } from 'react';
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
        <button className="post-btn">
          <i id="heartBtn" onClick={this.likePost.bind(this)} className="fas fa-heartbeat" />
        </button>
        <span>{this.state.likes}</span>
      </Col>
    );
  }
}

export default Like;