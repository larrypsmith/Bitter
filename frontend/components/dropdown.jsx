import React from 'react'
import { Link } from 'react-router-dom';
import { logout } from '../actions/session_actions';
import { useDispatch } from 'react-redux';

export default ({ isHidden, currentUser, toggleDropdown }) => {
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(logout());
  }

  return isHidden
  ? null
  : <div className="dropdown-menu" onClick={toggleDropdown}>
      <Link to={`/users/${currentUser.id}`}>My Profile</Link>
      <button onClick={handleClick}>Log out</button>
    </div>
}