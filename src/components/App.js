import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import * as routes from '../constants/routes';
import './App.css';


const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
      <div className="App">
        <Route exact path={routes.HOME} component={Home} />
        <Route exact path={routes.LOGIN} component={Login} />
        <Route exact path={routes.REGISTER} component={Register} />
        <Route exact path={routes.PROFILE} component={Profile} />
      </div>
    </Router>
  ); 
};

export default App;