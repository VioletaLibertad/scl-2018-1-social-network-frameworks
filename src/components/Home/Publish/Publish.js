import React, { Component } from 'react';
import { Button, Input } from 'react-materialize';
import { Container, Col } from 'react-grid-system';
import Messages from '../Messages/Messages';
// import firebase from '../../../firebase/index';

// const db = firebase.firestore();
// const currentUser = firebase.auth().currentUser;

class Publish extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      text: '',
      time: new Date().getTime(),
      date: new Date(new Date().getTime()).toLocaleString(),
      creator: 'Ely',
      showMessage: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    this.setState({
      showMessage: true 
    });
    console.log('A name was submitted: ' + this.state.value + this.state.date + this.state.time + this.state.creator);
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <Col md={12} className="publish-container">
          <form onSubmit={this.handleSubmit} className="publish-container">
            <textarea id="textarea1" value={this.state.value} className="materialize-textarea" placeholder="Comparte algo..." onChange={this.handleChange} />
            <Button type="submit">PUBLICAR</Button>
          </form>
        </Col>
        <Col md={12} className="publish-container">
          {this.state.showMessage ? <Messages creator={this.state.creator} text={this.state.value} /> : null}
        </Col>

      </Container>
    );
  }
}

export default Publish;