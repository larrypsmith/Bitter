import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchUser } from '../actions/user_actions';
import UserShow from './user_show';

const mSTP = ({ entities: { users, beers, breweries, checkins } }, { match: { params: { id } } }) => {
  return ({
    user: users[id],
    checkins: Object.values(checkins),
    beers: beers,
    breweries: breweries
  })
}

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
})

export default withRouter(connect(mSTP, mDTP)(UserShow));