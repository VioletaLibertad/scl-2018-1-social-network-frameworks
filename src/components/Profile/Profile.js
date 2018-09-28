import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Input, Button } from 'react-materialize';
import { firebase } from "../../firebase/index";
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './style.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      fullName: '',
      email: '',
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
      userName: this.state.userName,
      fullName: this.state.fullName,
      email: this.state.email
    }); 
    this.setState({
      userName: '',
      fullName: '',
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
            <Col sm={3} />
            <Col sm={6}>
              <form onSubmit={this.addUser}>
                <Input disabled type="text" name="userName" label="Nombre de usuario" />
                <Input disabled type="text" name="fullName" label="Nombre completo" />
                <Input disabled type="email" name="email" label="Email" />
                <Input disabled type="password" name="password" label="Contraseña" />
                <Button type="submit">Submit</Button>
              </form>
            </Col>
            <Col sm={3} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;


              