import React, { Component } from 'react';
import '../styles.css';
import logoApp from '../../../LOGO 0.png';

class Logo extends Component {

  render() {
    return (
      <div>
        <img className="logoApp" src={logoApp} />
      </div>
    )
  }
}

export default Logo;