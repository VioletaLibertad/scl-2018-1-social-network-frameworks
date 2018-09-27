import React from 'react';
import './styles.css';
import Logo from './Logo/Logo';
import LoginForm from './LoginForm/LoginForm';
import { SignUpLink } from '../Register/Register';

const Login = () => {
  return (
    <div className="mainContainer">
      <Logo />
      <LoginForm />
      <SignUpLink />
    </div>
  );
};

export default Login;