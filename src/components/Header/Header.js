import React from 'react';
import Logo from '../../img/LOGO 0.png';

const Header = (props) => {
  return (
    <div className="header">
      <h3>{props.name}</h3>
    </div>
  )
}

export default Header;