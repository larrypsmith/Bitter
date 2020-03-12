import React from 'react';
import Banner from './banner';
import Checkin from './checkin';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    debugger
    this.props.fetchUser(this.props.match.params.id)
  }

  componentDidUpdate() {
    debugger
    if (!this.props.user) {
      this.props.fetchUser(this.props.match.params.id)
    }
    debugger
  }

  render() {
    debugger
    const { user, checkins, beers, breweries, fetchUser } = this.props;
    if (!user) return null;
    debugger
    return (
    <div className="user-show">
      <Banner
        user={user}
        fetchUser={fetchUser}
      />

      <ul className="checkin-index">
        {
          checkins.map((checkin, idx) => {
            debugger;
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
    )
  }
}