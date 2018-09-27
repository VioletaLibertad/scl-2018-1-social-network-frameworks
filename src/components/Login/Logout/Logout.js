import React from 'react';
import {Button} from 'react-materialize';
import { auth } from '../../../firebase';


const LogoutButton = () => {
  return (
    <Button type="button" onClick={auth.doSignOut}>Cerrar Sesión</Button>
  );
};

export default LogoutButton;