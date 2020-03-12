import React from 'react';
import Banner from './banner';
import Checkin from './checkin';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchUser(this.props.match.params.id)
    }
  }

  render() {
    const { user, checkins, beers, breweries, fetchUser } = this.props;
    if (!user) return null;
    return (
    <div className="user-show">
      <Banner
        user={user}
        fetchUser={fetchUser}
      />

      <div className="index">
        <h1>Recent Checkins</h1>

        <ul>
          {
            checkins.map((checkin, idx) => {
              const beer = beers[checkin.beer_id];
              const brewery = breweries[beer.brewery_id]
              return(
                <Checkin
                checkin={checkin}
                user={user}
                beer={beer}
                brewery={brewery}
                key={idx}
                />
                )
              })
            }
        </ul>
      </div>
    </div>
    )
  }
}