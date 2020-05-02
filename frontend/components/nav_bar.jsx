import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from './dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../actions/user_actions';
import Avatar from './avatar';

const NavBar = () => {
  const [isDropdownHidden, setDropdownHidden] = useState(true);
  const currentUserId = useSelector(state => state.session.id);
  const currentUser = useSelector(state => state.entities.users[currentUserId]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(currentUserId))
  }, [dispatch, currentUserId]);

  const toggleDropdown = e => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownHidden(!isDropdownHidden)
  }

  if (!currentUser) return null;
  return (
    <nav className="NavBar">
      <Link to="/home" className="bitter-logo">BITTER</Link>

      <div className="nav-links">
        <NavLink to="/breweries" className="nav-link" activeClassName="active-nav-link">Breweries</NavLink>
      </div>

      <div className="dropdown-parent">
        <Avatar
          size={40}
          onClick={toggleDropdown}
          src={currentUser.profilePictureUrl}
          alt={currentUser.username}
        />
        <Dropdown
          currentUser={currentUser}
          isHidden={isDropdownHidden}
          toggleDropdown={toggleDropdown}
        />
      </div>
    </nav>
  )
}

export default NavBar;