import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import NavLink from 'react-router-dom/NavLink';
import LogoutButton from './Login/Logout/Logout';
import * as routes from '../constants/routes';


const Navigation = () => {
  return (
    <div>
      <ul>
        <li className="list-item">
          <NavLink to={process.env.PUBLIC_URL + routes.LOGIN}>Login</NavLink>
        </li>
        <li className="list-item">
          <NavLink to={process.env.PUBLIC_URL + routes.REGISTER}>Register</NavLink>
        </li>
        <li className="list-item">
          <NavLink to={process.env.PUBLIC_URL + routes.HOME}>Home</NavLink>
        </li>
        <li className="list-item">
          <NavLink to={process.env.PUBLIC_URL + routes.PROFILE}>Profile</NavLink>
        </li>
        <li className="list-item"><LogoutButton /></li>
      </ul>
    </div>
  );
};

export default withRouter(Navigation);