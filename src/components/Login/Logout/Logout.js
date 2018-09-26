import React from 'react';
import { auth } from '../../../firebase';

const LogoutButton = () => {
  return (
    <button type="button" onClick={auth.doSignOut}>Cerrar Sesión</button>
  );
};

export default LogoutButton;