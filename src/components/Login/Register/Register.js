// Basic imports
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../../../firebase/index';
// Styling imports
import { Container, Row, Col } from 'react-grid-system';
import { Input, Button } from 'react-materialize';

// Setting initial state of component
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

// This extracts the value from inputs
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email, 
      passwordOne
    } = this.state;

    const {history} = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(authUser => {
      // db.doCreateUser(authUser.user.uid, email)
      this.setState({ ...INITIAL_STATE });
      history.push('../../Home');
    })
    .catch(error => {
      this.setState(byPropKey('error', error));
    });
    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    // This validates info and deactivate submit button when incorrect
    const isInvalid = 
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <div>
        <Container>
          <Row>
            <Col sm={3} />
            <Col sm={6}>
              <form onSubmit={this.onSubmit}>
              <Input value={username} onChange={event => this.setState(byPropKey('username', event.target.value))} type="text" label="Nombre de usuario" s={12} />

              <Input value={email} onChange={event => this.setState(byPropKey('email', event.target.value))} type="email" label="Email" s={12} />

              <Input value={passwordOne} onChange={event => this.setState(byPropKey('passwordOne', event.target.value))} type="password" label="Password" s={12} />

              <Input value={passwordTwo} onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))} type="password" label="Confirm Password" s={12} />

              <Button disabled={isInvalid} type="submit" waves='light'>Ingresar</Button>

              { error && <p>{error.message}</p> }
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

export default withRouter(RegisterForm);

export {
  SignUpLink
};