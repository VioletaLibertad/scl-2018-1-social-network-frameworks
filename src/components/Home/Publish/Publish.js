import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { Col } from 'react-grid-system';
import Messages from '../Messages/Messages';
// import { auth, db } from '../../../firebase/index';

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
      id: 0,
      creator: 'Alguien',
      likes: '0'
    };

    // const currentUser = auth.currentUser;
    // const newMessageKey = db.ref().child('messages').push().key;
    // db.ref(`messages/${newMessageKey}`).set({
    //   creator: currentUser,
    //   creatorName: currentUser.displayName,
    //   text: this.textInput.value,
    //   counter: 0
    // });

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
          {this.state.messages.map(element => <Messages id={element.id + 1} counter={element.likes} creator={element.creator} text={element.text} />)}
        </Col>
      </div>
    );
  }
    
}

export default Publish;