import React from 'react';
import ListItem from './ListItem'

const NavbarList = () => {
  const list = ['Muro', 'Perfil', 'Cerrar Sesión']
  return (
    <div className="navbar-list">
      <ul>
        { 
          list.map(element => <ListItem name={element} />)
        }
      </ul>
    </div>
  );
}

export default NavbarList;