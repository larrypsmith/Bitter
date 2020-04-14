import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from './dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../actions/user_actions';

export default () => {
  const [dropdownHidden, setDropdownHidden] = useState(true);
  const currentUserId = useSelector(state => state.session.id);
  const currentUser = useSelector(state => state.entities.users[currentUserId]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(currentUserId))
  }, [currentUserId]);

  const toggleDropdown = e => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownHidden(!dropdownHidden)
  }

  if (!currentUser) return null;
  return (
    <nav className="nav-bar">
      <Link to="/home" className="bitter-logo">BITTER</Link>

      <div className="nav-links">
        <NavLink to="/breweries" className="nav-link" activeClassName="active-nav-link">Breweries</NavLink>
      </div>

      <div className="dropdown-parent">
        <img
          className="user-profile-picture"
          onClick={toggleDropdown}
          src={currentUser.profilePictureUrl}
          alt={currentUser.username}
        />
        <Dropdown
          currentUser={currentUser}
          isHidden={dropdownHidden}
          toggleDropdown={toggleDropdown}
        />
      </div>
    </nav>
  )
}