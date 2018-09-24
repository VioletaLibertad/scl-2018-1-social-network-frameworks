import React from 'react';
import { auth } from '../../../firebase';

const LogoutButton = () =>
  <button type="button" onClick={auth.doSignOut}>Cerrar Sesión</button>

export default LogoutButton;