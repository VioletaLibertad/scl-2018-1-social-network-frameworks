import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './Login/Logout/Logout';
import * as routes from '../constants/routes';

const Navigation = () => {
  return (
    <div>
      <ul>
        <li><Link to={routes.LOGIN}>Login</Link></li>
        <li><Link to={routes.LANDING}>Landing</Link></li>
        <li><Link to={routes.HOME}>Home</Link></li>
        <li><Link to={routes.REGISTER}>Register</Link></li>
        <li><Link to={routes.PROFILE}>Profile</Link></li>
        <li><LogoutButton /></li>
      </ul>
    </div>
  );
};

export default Navigation;