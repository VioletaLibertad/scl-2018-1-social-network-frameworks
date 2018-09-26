import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Login from './Login/Login';
import Register from './Register/Register';
import Landing from './Landing/Landing';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import * as routes from '../constants/routes';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <hr />
        <Route exact path={routes.HOME} component={Home} />
        <Route exact path={routes.LANDING} component={Landing} />
        <Route exact path={routes.LOGIN} component={Login} />
        <Route exact path={routes.REGISTER} component={Register} />
        <Route exact path={routes.PROFILE} component={Profile} />
      </div>
    </Router>
  ); 
}

export default App;

/* 

import Login from './Login/Login';

<div className="App">
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path="/profile" component={Profile} />
      </div>
*/