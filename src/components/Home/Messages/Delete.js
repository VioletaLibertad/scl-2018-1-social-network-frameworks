import React, { Component } from 'react';

class Delete extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0
    };
  }

  deletePost(event) {
    /* eslint no-restricted-globals: ["off", "location"] */
    if (confirm('¿Estás seguro de eliminar este mensaje?')) {
      event.stopPropagation();
      const parent1 = event.target.parentNode.parentNode.parentNode;
      const parent2 = parent1.parentNode;
      document.getElementById('messageDiv').removeChild(parent2);
    }
  }

  render() {
    return (
      <button type="button" className="post-btn" onClick={this.deletePost.bind(this)}>
        <i className="fas fa-trash-alt" />
      </button>
    );
  }
}

export default Delete;