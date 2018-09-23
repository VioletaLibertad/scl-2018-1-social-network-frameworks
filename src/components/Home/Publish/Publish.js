import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { Col } from 'react-grid-system';

const Publish = () => {
  return (
    <Col md={10} offset={{ md: 1 }} className="publish-container">
      <textarea class="materialize-textarea" placeholder="Comparte algo..."></textarea>
      <Button>PUBLICAR</Button>
    </Col>
  )
}
export default Publish;