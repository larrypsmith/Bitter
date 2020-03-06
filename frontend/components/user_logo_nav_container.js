import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

import UserNav from './user_logo_nav';

const mSTP = (state, ownProps) => ({
  hidden: ownProps.hidden
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(UserNav);