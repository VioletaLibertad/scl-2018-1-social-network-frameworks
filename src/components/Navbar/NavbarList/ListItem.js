import React from 'react';

const ListItem = (props) => {
  return (
    <div className="list-item">
      <li>{props.name}</li>
    </div>
  );
}

export default ListItem;