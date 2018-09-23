import React from 'react';
import { Button } from 'react-materialize';

const Footer = () => {
  return (
    <div className="footer">
        <Button><i class="fab fa-facebook-f"></i></Button>
        <Button><i class="fab fa-twitter"></i></Button>
        <Button><i class="fab fa-instagram"></i></Button>
    </div>
  );
}

export default Footer;