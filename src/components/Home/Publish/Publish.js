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
  //   const currentMessages = db.getMessages();
  //   if (currentMessages !== null) {
  //     this.setState({
  //       messages: currentMessages
  //     });
  //   }
  // }

  addNewMessage(event) {
    event.preventDefault();
    if (this.textInput.value === '') {
      return;
    }

    // const currentUser = auth.currentUser;
    let newMessage = {
      text: this.textInput.value,
      date: new Date(new Date().getTime()).toLocaleString(),
      id: 0,
      creator: 'gyj',
      likes: '0'
    };

    db.uploadMessage({
      text: this.textInput.value,
      date: new Date(new Date().getTime()).toLocaleString(),
      id: 0,
      creator: 'gyj',
      likes: '0'
    });

    this.setState(previousState => {
      return {
        messages: previousState.messages.concat(newMessage)
      };
    });  
    // console.log(db.getMessages);
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
          {this.state.messages.map(element => <Messages id={element.id + 1} counter={element.likes} creator={element.creator} text={element.text} />)
          }
        </Col>
      </div>
    );
  }
    
}

export default Publish;

// {this.state.messages.map(element => {
//   <Messages id={element.id + 1} counter={element.val().likes} creator={element.val().creator} text={element.val().text} />;
// })
// }