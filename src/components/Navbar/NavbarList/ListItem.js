import React from 'react';
import {Button} from 'react-materialize';

const ListItem = (props) => {
  return (
    <div className="list-item">
      <li>
        <Button>{props.name}</Button>
      </li>
    </div>
  );
}

export default ListItem;