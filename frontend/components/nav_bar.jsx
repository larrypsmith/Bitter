import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Avatar from './avatar';
import Container from './container';
import Dropdown from './dropdown';
import FlexParent from './flex_parent';
import FlexChild from './flex_child';

const NavBar = () => {
  const [isDropdownHidden, setDropdownHidden] = useState(true);
  const currentUserId = useSelector(state => state.session.id);
  const currentUser = useSelector(state => state.entities.users[currentUserId]);

  const toggleDropdown = e => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownHidden(!isDropdownHidden)
  }

  if (!currentUser) return null;
  return (
    <div className="NavBar">
      <Container maxWidth="md" >
        <FlexParent>
          <FlexChild>
            <Link to="/home" className="bitter-logo">BITTER</Link>
          </FlexChild>

          <FlexChild align="center">
            <NavLink
              to="/breweries"
              className="nav-link"
              activeClassName="active-nav-link"
            >
              Breweries
            </NavLink>
          </FlexChild>

          <FlexChild className="dropdown-parent">
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
          </FlexChild>
        </FlexParent>
      </Container>
    </div>
  )
}

export default NavBar;