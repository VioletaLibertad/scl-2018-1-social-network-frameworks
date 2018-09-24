import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { Container, Col } from 'react-grid-system';
import Messages from '../Messages/Messages';
import firebase from '../../../firebase/index';

// const db = firebase.firestore();


class Publish extends Component {
  constructor() {
    super();
    this.state = { //guarda los elementos
      messages: [],
      showMessage: false
    };
    this.addNewMessage = this.addNewMessage.bind(this);
  }

  addNewMessage(event) {
    event.preventDefault();
    if (this.textInput.value === '') {
      return;
    }

    let newMessage = {
      text: this.textInput.value,
      date: new Date(new Date().getTime()).toLocaleString(),
      creator: ''
    };

    this.setState((previousState) => {
      return {
        messages: previousState.messages.concat(newMessage),
        showMessage: true
      };
    });

    this.textInput.value = '';
  }

  render() {
    return (
      <div>
        <Col md={12} className="publish-container">
          <form onSubmit={this.addNewMessage} className="publish-container">
            <textarea ref={(input) => this.textInput = input} className="materialize-textarea publish-textarea" placeholder="Comparte algo..." />
            <Button type="submit">PUBLICAR</Button>
          </form>
        </Col>
        <Col md={12} className="messages-container">
          {this.state.messages.map(element => <Messages creator={element.creator} text={element.text} />)}
        </Col>
      </div>
    );
  }
    
}

export default Publish;