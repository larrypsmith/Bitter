import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchUser } from '../actions/user_actions';
import UserShow from './user_show';

const mSTP = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id];
  return ({
    user: user,
    checkins: Object.values(state.entities.checkins),
    beers: state.entities.beers,
    breweries: state.entities.breweries
  })
}

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
})

export default withRouter(connect(mSTP, mDTP)(UserShow));