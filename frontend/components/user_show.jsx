import React from 'react';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { user } = this.props;
    return (
    <h1>{user.username}'s Show Page</h1>
    )
  }
}