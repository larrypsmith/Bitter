import React from 'react';
import UserLogoNavContainer from './user_logo_nav_container';

export default ({ hidden }) => (
  <div>
    <i className="fas fa-user-circle fa-2x user-logo"></i>
    <UserLogoNavContainer hidden={hidden} /> 
  </div>
)
