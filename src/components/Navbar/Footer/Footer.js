import React from 'react';
import { Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer-btn">
        <Button><i class="fab fa-facebook-f"></i></Button>
        <Button><i class="fab fa-twitter"></i></Button>
        <Button><i class="fab fa-instagram"></i></Button>
    </div>
  );
}

export default Footer;