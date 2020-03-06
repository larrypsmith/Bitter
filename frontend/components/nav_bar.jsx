import React from 'react';
import { Link } from 'react-router-dom';
import UserLogo from './user_logo';

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
        {/* <button className="bitter-logo-btn"> */}
          <Link to="/home" className="bitter-logo">BITTER</Link>
        {/* </button> */}

        <div className="user-logo-container" onClick={this.toggleDropdown}>
          <UserLogo hidden={this.state.dropdownHidden} />
        </div>
      </nav>
    )
  }

}