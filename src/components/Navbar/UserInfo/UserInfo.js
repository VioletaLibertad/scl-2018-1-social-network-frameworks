import React, { Component } from 'react';
import ProfilePicture from '../../../img/default-profile.png'

class UserInfo extends Component {
  render() {
    return (
      <div className="user-info">
        <div className="user-picture">
          <img src={ProfilePicture} alt=""/>
        </div>
        <p>Nombre</p>
        <a href="#">Ver perfil</a>
      </div>
    );
  }
};


export default UserInfo;