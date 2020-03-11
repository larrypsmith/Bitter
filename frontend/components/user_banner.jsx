import React from 'react';

export default class UserBanner extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!this.props.user) this.props.fetchUser(this.props.user.id)
  }

  render() {
    const { user } = this.props;
    if (!user) return null;
    return (
      <div className="user-banner">
        <div className="profile-elements">
          <img src={user.profilePictureUrl} alt={`${user.username}`} className="user-profile-picture"/>
          <h1 className="username">
            {user.username}
          </h1>
        </div>

      </div>
    )
  }
}