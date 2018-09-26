import React from 'react';
import {Button} from 'react-materialize';
import { BrowserRouter as Route, Link } from "react-router-dom";
import Home from '../../Home/Home';
import Profile from '../../Profile/Profile';
import Login from '../../Login/Login';


const ListItem = (props) => {
  if (props.name === 'Muro') {
    return (
      <li className="list-item">
        <Button>
          <Link to="/home" className="link">MURO</Link>
          <Route exact path="/home" component={Home} />
        </Button>
      </li>
    );
  } else if (props.name === 'Perfil') {
    return (
      <li className="list-item">
        <Button>
          <Link to="/profile" className="link">PERFIL</Link>
          <Route exact path="/profile" component={Profile} />
        </Button>
      </li>
    );
  } else if (props.name === 'Cerrar Sesión') {
    // Falta cerrar sesión como tal, esto es solo de renderizado básico
    return (
      <li className="list-item">
        <Button>
          <Link to="/login" className="link">CERRAR SESIÓN</Link>
          <Route exact path="/login" component={Login} />
        </Button>
      </li>
    );
  }
};

export default ListItem;