import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from './dropdown';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownHidden: true
    }
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(e) {
    this.setState({ dropdownHidden: !this.state.dropdownHidden })
  }

  render() {
    const { currentUser, logout } = this.props;
    const { dropdownHidden } = this.state;
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
            onClick={this.toggleDropdown}
            src={currentUser.profilePictureUrl}
            alt={currentUser.username}
          />
          <Dropdown
            currentUser={currentUser}
            logout={logout}
            hidden={dropdownHidden}
          />
        </div>
      </nav>
    )
  }

}