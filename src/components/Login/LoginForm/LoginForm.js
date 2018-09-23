// Basic imports
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../../../firebase/index';
// Styling imports
import { Container, Row, Col } from 'react-grid-system';
import { Input, Button } from 'react-materialize';

const byPropKey = (propertyName, value) => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
    .then(() => {
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
      email,
      password, 
      error,
    } = this.state;

    const isInvalid = 
      password === '' ||
      email === '';

    return (
      <div>
        <Container>
          <Row>
            <Col sm={3} />
            <Col sm={6}>
              <form onSubmit={this.onSubmit}>
                <Input value={email} onChange={event => this.setState(byPropKey('email', event.target.value))} type="email" label="Email" s={12} />
                <Input value={password} onChange={event => this.setState(byPropKey('password', event.target.value))} type="password" label="password" s={12} />
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

export default withRouter(LoginForm);