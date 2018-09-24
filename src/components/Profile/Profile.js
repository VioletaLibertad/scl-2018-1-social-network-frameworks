import React, { Component } from 'react';
import { Container, Row } from 'react-grid-system';
import { firebase } from "../../firebase/index";
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './style.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      fullname: ''
    };
  }

  updateInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addUser (e) {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection('users').add({
      fullname: this.state.fullname,
      email: this.state.email
    }); 
    this.setState({
      fullname: '',
      email: ''
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container className="wall">
          <Row>
            <Header name='PERFIL' />
          </Row>
          <Row className="test">
            <form onSubmit={this.addUser}>
              <input type="text" name="fullname" placeholder="Full name" />
              <input type="email" name="email" placeholder="Full name" />
              <button type="submit">Submit</button>
            </form>
          </Row>
        </Container>
      </div>
      );
    }
   }

export default Profile;