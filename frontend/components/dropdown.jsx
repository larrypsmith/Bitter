import React from 'react'
import { Link } from 'react-router-dom';

export default ({ hidden, logout, currentUser }) => {
  return hidden
  ? null
  : <div className="user-logo-dropdown">
      <Link to={`/users/${currentUser.id}`}>My Profile</Link>
      <button onClick={logout}>Log out</button>
    </div>
}