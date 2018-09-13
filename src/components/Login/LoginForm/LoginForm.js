import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Input } from 'react-materialize';
import { Button } from 'react-materialize';

class LoginForm extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <Container>
          <Row>
              <Col sm={4}></Col>
              <Col sm={4}>
                <form>
                  <Input type="email" label="Email" s={12} />
                  <Input type="password" label="password" s={12} />
                  <Button waves='light'>Ingresar</Button>
                </form>
              </Col>
              <Col sm={4}></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default LoginForm;