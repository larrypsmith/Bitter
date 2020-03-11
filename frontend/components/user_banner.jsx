import React from 'react';
import UserProfilePicture from './user_profile_picture';


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
          <UserProfilePicture user={user} />
          <h1 className="username">
            {user.username}
          </h1>
        </div>

      </div>
    )
  }
}