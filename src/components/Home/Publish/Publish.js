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

    const newMessageKey = db.fbDatabase.ref().child('messages').push().key;
    db.fbDatabase.ref(`messages/${newMessageKey}`).set({
      messageId: newMessageKey,
      text: this.textInput.value,
      date: new Date(new Date().getTime()).toLocaleString(),
      creator: auth.fbAuth.currentUser.displayName,
      likes: '0'
    });

    let newMessage = {
      messageId: newMessageKey,
      text: this.textInput.value,
      date: new Date(new Date().getTime()).toLocaleString(),
      creator: auth.fbAuth.currentUser.displayName,
      likes: '0'
    };

    this.setState(previousState => {
      return {
        messages: previousState.messages.concat(newMessage)
      };
    });

    // db.fbDatabase.ref('messages/').once('child_added', (newMessage) => {
    //   console.log(newMessage.val());
    //   document.getElementById('message-div').innerHTML += `
    //   <div class="messages">
    //     <div className="creator-info col-md-12">
    //       <img src={ProfilePicture} alt="" className="picture" />
    //       <p>${newMessage.val().creator}</p>
    //     </div>
    //     <div className="col-md-12">
    //       <textarea id=${newMessage.key} disabled className="materialize-textarea">${newMessage.val().text}</textarea>
    //     </div>
    //     <div class="col-md-3">
    //       <button type="button" className="post-btn">
    //         <i className="fas fa-heartbeat"></i>
    //         <span>${newMessage.val().likes} </span>
    //       </button>
    //     </div>
    //     <div class="col-md-3 offset-s6">
    //       <button type="button" className="post-btn">
    //         <i className="fas fa-edit"></i>
    //       </button>
    //       <button type="button" className="post-btn">
    //         <i className="fas fa-trash-alt"></i>
    //       </button>
    //     </div>
    //   </div>
    //   `;
    // });
    console.log(this.state.messages);
    this.textInput.value = '';
  }

  likePost() {
    let counter = 0;
    document.getElementsByClassName('counterDiv').innerHTML = counter++;
  }

  editPost() {
      
  }

  deletePost(event) {
    // /* eslint no-restricted-globals: ["off", "location"] */
    // if (confirm('¿Estás seguro de eliminar este mensaje?')) {
    //   event.stopPropagation();
    //   const messageId = event.target.getAttribute('data-id');
    //   const messageRef = db.fbDatabase.ref('messages').child(messageId);
    //   messageRef.remove();
    //   document.getElementById('messageDiv').removeChild(messageId);
    // }S
  }

  render() {
    return (
      <div>
        <Col md={12} className="publish-container">
          <form onSubmit={this.addNewMessage.bind(this)} className="publish-container">
            <textarea ref={(input) => this.textInput = input} className="materialize-textarea publish-textarea" placeholder="Comparte algo..." />
            <Button type="submit">PUBLICAR</Button>
          </form>
        </Col>
        <Col md={12} id="messageDiv" className="messages-container">
          {this.state.messages.map(element => <Messages text={element.text} creator={element.creator} counter={element.likes} id={element.messageId} />)}
        </Col>
      </div>
    );
  }
}

export default Publish;

// {this.state.messages.map(element => <Messages id={element.id + 1} counter={element.likes} creator={element.creator} text={element.text} />)
// }

// (  
//   <Col md={12} className="messages" data-id={element.messageId} key={element.messageId}>
//     <Row>
//       <Col md={12} className="creator-info">
//         <img src={ProfilePicture} alt="" className="picture" />
//         <p>{element.creator}</p>
//       </Col>
//     </Row>
//     <Row>
//       <Col md={12}>
//         <textarea data-id={element.messageId} key={element.messageId} disabled className="materialize-textarea" value={element.text} />
//       </Col>
//     </Row>
//     <Row>
//       <Col md={3}>
//         <button data-id={element.messageId} type="button" className="post-btn" onClick={this.likePost()}>
//           <i className="fas fa-heartbeat" />
//         </button>
//         <span className="counterDiv" />
//       </Col>
//       <Col md={3} offset={{ md: 6 }}>
//         <button type="button" className="post-btn">
//           <i className="fas fa-edit" />
//         </button>
//         <button type="button" className="post-btn" onClick={this.deletePost(element.messageId)}>
//           <i className="fas fa-trash-alt" />
//         </button>
//       </Col>
//     </Row>
//   </Col>
// )