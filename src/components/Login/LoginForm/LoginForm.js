// Basic imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Styling imports
import { Container, Row, Col } from 'react-grid-system';
import { Input, Button } from 'react-materialize';

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = event => {

  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={3} />
            <Col sm={6}>
              <form onSubmit={this.onSubmit}>
                <Input type="email" label="Email" s={12} />
                <Input type="password" label="password" s={12} />
                <Button type="submit" waves='light'>Ingresar</Button>
              </form>
            </Col>
            <Col sm={3} />
          </Row>
        </Container>
      </div>
    )
  }   
}

const SignUpLink = () => {
  <p>No tienes una cuenta? Regístrate acá:
    <Link to={`../Register/Register.js`}>Registrarse</Link>
  </p>
}

export default LoginForm;

export {
  SignUpLink
};