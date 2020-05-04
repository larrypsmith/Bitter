import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../actions/user_actions';
import Avatar from './avatar';
import Button from './button';
import Container from './container';
import Dropdown from './dropdown';
import FlexParent from './flex_parent';
import FlexChild from './flex_child';

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

          <FlexChild>
            <Link to="/checkin">
              <Button variant="outlined">
                Check In a Beer
              </Button>
            </Link>
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