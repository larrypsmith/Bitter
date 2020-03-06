import React from 'react';
import UserLogoNavContainer from './user_logo_nav_container';

export default ({ hidden }) => (
  <i className="fas fa-user-circle fa-1x user-logo">
    <UserLogoNavContainer hidden={hidden} /> 
  </i>
)

