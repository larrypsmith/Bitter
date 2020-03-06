import React from 'react';
import { Link } from 'react-router-dom';
import UserLogo from './user_logo';
import UserLogoNavContainer from './user_logo_nav_container';

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
    return (
      <nav className="nav-bar">
        <Link to="/feed" className="link-feed">BITTER</Link>
        <div className="user-logo-container" onClick={this.toggleDropdown}>
          <UserLogo />
        </div>
        <UserLogoNavContainer hidden={this.state.dropdownHidden} /> 
      </nav>
    )
  }

}