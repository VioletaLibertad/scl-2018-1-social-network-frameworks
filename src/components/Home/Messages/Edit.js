import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { Col } from 'react-grid-system';

class Edit extends Component {
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
      <button type="button" className="post-btn">
      <i className="fas fa-edit" />
      </button>
    );
  }
}

export default Edit;