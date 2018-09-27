// Basic imports
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../../firebase/index';
import * as routes from '../../constants/routes';
// Styling imports
import { Container, Row, Col } from 'react-grid-system';
import { Input, Button } from 'react-materialize';
import Header from '../Header/Header';
import './styles.css';

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
      this.setState({ ...INITIAL_STATE });
      history.push(routes.HOME);
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
            <Header name="REGISTRO" />
          </Row>
          <Row className="registerStyle">
            <Col sm={3} />
            <Col sm={6}>
              <form onSubmit={this.onSubmit}>
              <Input value={username} onChange={event => this.setState(byPropKey('username', event.target.value))} type="text" label="Nombre de usuario" s={12} />

              <Input value={email} onChange={event => this.setState(byPropKey('email', event.target.value))} type="email" label="Email" s={12} />

              <Input value={passwordOne} onChange={event => this.setState(byPropKey('passwordOne', event.target.value))} type="password" label="Contraseña" s={12} />

              <Input value={passwordTwo} onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))} type="password" label="Confirmar Contraseña" s={12} />

              <Link className="registerBtn" to={process.env.PUBLIC_URL + routes.LOGIN}>ATRÁS</Link>

              <Button className="registerBtn" disabled={isInvalid} type="submit" waves='light'>Ingresar</Button>

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
  return(
  <p>No tienes una cuenta? Regístrate
    <Link to={process.env.PUBLIC_URL + routes.REGISTER}> AQUÍ</Link>
  </p>
  )
}

export default withRouter(RegisterForm);

export {
  SignUpLink
};