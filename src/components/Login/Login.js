import React from 'react';
import './styles.css';
import Logo from './Logo/Logo';
import LoginForm from './LoginForm/LoginForm';

const Login = () => {
  return (
    <div className="mainContainer">
      <Logo />
      <LoginForm />
    </div>
  );
};

export default Login;