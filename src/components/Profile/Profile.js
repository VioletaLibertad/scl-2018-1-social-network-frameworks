import React, { Component } from 'react';
// import firebase from "./firebase";
import { Container, Row } from 'react-grid-system';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      fullname: ''
    };
  }

  updateInput (event) {
    this.setState({
      [event.target.name]: event.target.value
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
          <Row>
            <form>
              <input type="text" name="fullname" placeholder="Full name" />
              <input type="email" name="email" placeholder="Full name" onChange={this.updateInput} />
              <button type="submit">Submit</button>
            </form>
          </Row>
        </Container>
      </div>
      );
    }
   }

export default Profile;