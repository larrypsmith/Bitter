import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchUser } from '../actions/user_actions';
import UserShow from './user_show';
import { getCheckinsByUser, getBeersByCheckins, getBreweriesByBeers } from '../reducers/selectors';


const mSTP = (state, { match: { params: { id } } }) => {
  const user = state.entities.users[id];
  let checkins;
  let beers;
  let breweries;
  if (!user) {
    checkins = null;
    beers = null;
    breweries = null;
  } else {
    checkins = getCheckinsByUser(state, user);
    beers = getBeersByCheckins(state, checkins);
    breweries = getBreweriesByBeers(state, beers);
    debugger
  }
  debugger
  return ({
    user: user,
    checkins: checkins,
    beers: beers,
    breweries: breweries
  })
}

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
})

export default withRouter(connect(mSTP, mDTP)(UserShow));