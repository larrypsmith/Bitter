import React from 'react';
import UserBanner from './user_banner';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { user, fetchUser } = this.props;
    return (
    <div className="user-show">
      <UserBanner
        user={user}
        fetchUser={fetchUser}
      />
    </div>
    )
  }
}