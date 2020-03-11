import React from 'react';
import UserBanner from './user_banner';
import Checkin from './checkin';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id)
  }

  componentDidUpdate() {
    if (!this.props.user) {
      this.props.fetchUser(this.props.match.params.id)
    }
  }

  render() {
    const { user, checkins, beers, fetchUser } = this.props;
    if (!user) return null;
    return (
    <div className="user-show">
      <UserBanner
        user={user}
        fetchUser={fetchUser}
      />
      <ul>
        {
          checkins.map((checkin, idx) => (
            <Checkin
              checkin={checkin}
              user={user}
              beer={beers[checkin.beer_id]}
              key={idx}
            />
          ))
        }
      </ul>
    </div>
    )
  }
}