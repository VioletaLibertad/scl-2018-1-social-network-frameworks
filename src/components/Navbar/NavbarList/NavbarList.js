import React from 'react';
import ListItem from './ListItem';
import { Container } from 'react-grid-system';

const NavbarList = () => {
  const list = ['Muro', 'Perfil', 'Cerrar Sesión']
  return (
    <Container className="navbar-list">
      <ul>
        { 
          list.map(element => <ListItem name={element} />)
        }
      </ul>
    </Container>
  );
}

export default NavbarList;