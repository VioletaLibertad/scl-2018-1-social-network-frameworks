import React, { Component } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
  render() {
    return (
      <div className="footer-btn">
        <ButtonGroup>
          <Button>Facebook</Button>
          <Button>Google</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
    );
  }
}
export default Footer;