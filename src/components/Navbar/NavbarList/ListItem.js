import React from 'react';
import {Button} from 'react-materialize';

const ListItem = (props) => {
  return (
    <div className="list-item">
      <li>{props.name}</li>
    </div>
  );
}

export default ListItem;