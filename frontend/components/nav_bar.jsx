import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from './dropdown';
import { useSelector } from 'react-redux';

export default () => {
  const [dropdownHidden, setDropdownHidden] = useState(true);
  const currentUser = useSelector(state => state.entities.users[state.session.id])

  const toggleDropdown = e => {
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
          hidden={dropdownHidden}
          toggleDropdown={toggleDropdown}
        />
      </div>
    </nav>
  )
  }

}