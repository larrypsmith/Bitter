import React from 'react'
import { Link } from 'react-router-dom';
import { logout } from '../actions/session_actions';
import { useDispatch } from 'react-redux';

const Dropdown =  ({ isHidden, currentUser, toggleDropdown }) => {
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(logout());
  }

  if (isHidden) return null;

  return(
    <div className="dropdown-menu" onClick={toggleDropdown}>
      <Link to={`/users/${currentUser.id}`}>My Profile</Link>
      <button onClick={handleClick}>Log out</button>
    </div>
  )
};

export default Dropdown;