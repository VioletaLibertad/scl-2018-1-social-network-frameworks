import React, { Component } from 'react';
import './styles.css';
import Logo from './Logo/Logo';
import LoginForm from './LoginForm/LoginForm';

class Login extends Component {
 
  render() {
    return (
      <div className="mainContainer">
        <Logo />
        <LoginForm />
      </div>
    )
  }
}

export default Login;