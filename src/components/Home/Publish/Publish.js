import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { Col } from 'react-grid-system';
import Messages from '../Messages/Messages';
import { auth, db } from '../../../firebase/index';

class Publish extends Component {
  constructor() {
    super();
    this.state = { //guarda los elementos
      messages: []
    };
    this.addNewMessage = this.addNewMessage.bind(this);
  }

  // componentDidMount() {
    
  // }
  
  addNewMessage(event) {
    event.preventDefault();
    if (this.textInput.value === '') {
      return;
    }

    let newMessage = {
      text: this.textInput.value,
      date: new Date(new Date().getTime()).toLocaleString(),
      creator: auth.fbAuth.currentUser.displayName,
      likes: '0'
    };

    const newMessageKey = db.fbDatabase.ref().child('messages').push().key;
    db.fbDatabase.ref(`messages/${newMessageKey}`).set({
      text: this.textInput.value,
      date: new Date(new Date().getTime()).toLocaleString(),
      creator: auth.fbAuth.currentUser.displayName,
      likes: '0'
    });

    this.setState(previousState => {
      return {
        messages: previousState.messages.concat(newMessage)
      };
    });

    db.fbDatabase.ref('messages/').once('child_added', (newMessage) => {
      console.log(newMessage.val());
      document.getElementById('message-div').innerHTML += `
      <div class="messages">
        <div className="creator-info col-md-12">
          <img src={ProfilePicture} alt="" className="picture" />
          <p>${newMessage.val().creator}</p>
        </div>
        <div className="col-md-12">
          <textarea id=${newMessage.key} disabled className="materialize-textarea">${newMessage.val().text}</textarea>
        </div>
        <div class="col-md-3">
          <button type="button" className="post-btn">
            <i className="fas fa-heartbeat" />
            <span>${newMessage.val().likes} </span>
          </button>
        </div>
        <div class="col-md-3 offset-s6">
          <button type="button" className="post-btn">
            <i className="fas fa-edit" />
          </button>
          <button type="button" className="post-btn">
            <i className="fas fa-trash-alt" />
          </button>
        </div>
      </div>
      `;
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
        <Col md={12} id="message-div" className="messages-container" />
      </div>
    );
  }
    
}

export default Publish;

// {this.state.messages.map(element => <Messages id={element.id + 1} counter={element.likes} creator={element.creator} text={element.text} />)
// }