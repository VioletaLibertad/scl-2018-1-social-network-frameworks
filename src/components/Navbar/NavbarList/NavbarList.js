import React from 'react';
import { Container } from 'react-grid-system';
import ListItem from './ListItem';

const NavbarList = () => {
  const list = ['Muro', 'Perfil', 'Cerrar Sesión'];
  return (
    <Container className="navbar-list">
      <ul>
        { 
          list.map(element => <ListItem name={element} />)
        }
      </ul>
    </Container>
  );
};

export default NavbarList;