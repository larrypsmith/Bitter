import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchUser } from '../actions/user_actions';
import UserShow from './user_show';

const mSTP = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.id]
})

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
})

export default withRouter(connect(mSTP, mDTP)(UserShow));