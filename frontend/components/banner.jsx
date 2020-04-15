import React from 'react';
import Avatar from './avatar';

export default class Banner extends React.Component {
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
      <div className="banner">
        <Avatar
          src={user.profilePictureUrl}
          alt={`${user.username}.jpg`}
        />
        <h1 className="username">
          {user.username}
        </h1>
      </div>
    )
  }
}