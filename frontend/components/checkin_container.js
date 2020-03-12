import { connect } from 'react-redux';
import Checkin from './checkin';

const mSTP = ({ entities: { users, beers, breweries } }, { checkin }) => {
  const beer = beers[checkin.beer_id];
  return ({
    checkin: checkin,
    user: users[checkin.user_id],
    beer: beer,
    brewery: breweries[beer.brewery_id]
  })
}

const mDTP = dispatch => ({
  fetchCheckin: checkin => dispatch(fetchCheckin(checkin))
})

export default connect(mSTP)(Checkin);