import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

import UserLogo from './user_logo_dropdown';

const mSTP = (state, ownProps) => ({
  hidden: ownProps.hidden,
  currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(UserLogo);