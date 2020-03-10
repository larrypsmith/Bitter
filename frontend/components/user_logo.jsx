import React from 'react';
import UserLogoDropdownContainer from './user_logo_dropdown_container';

export default ({ hidden }) => (
  <div>
    <i className="fas fa-user-circle fa-2x user-logo"></i>
    <UserLogoDropdownContainer hidden={hidden} /> 
  </div>
)