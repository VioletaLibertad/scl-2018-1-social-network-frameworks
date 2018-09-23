import React from 'react';
import '../styles.css';
import logoApp from '../../../LOGO 0.png';

const Logo = () => {
  return (
    <div>
      <img className="logoApp" alt="logoApp" src={logoApp} />
    </div>
  )
}

export default Logo;