import React from 'react';
import { Link } from 'react-router-dom';
import UserLogo from './user_logo';
import UserNavContainer from './user_nav_container';

export default () => (
  <nav className="nav-bar">
    <Link to="/feed" className="link-feed">BITTER</Link>
    <UserLogo />
    <UserNavContainer /> 
  </nav>

)