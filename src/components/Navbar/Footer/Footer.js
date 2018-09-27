import React from 'react';
import { Button } from 'react-materialize';

const Footer = () => {
  return (
    <div className="footer">
      <Button><i className="fab fa-facebook-f" /></Button>
      <Button><i className="fab fa-twitter" /></Button>
      <Button><i className="fab fa-instagram" /></Button>
    </div>
  );
};

export default Footer;