import React from 'react';
import { Link } from 'react-router-dom';
import UserLogo from './user_logo';

export default ({ logout }) => (
  <nav className="nav-bar">
    <Link to="/feed" className="link-feed">BITTER</Link>
    <UserLogo />
    <button onClick={logout}>LOG OUT</button>
  </nav>

)