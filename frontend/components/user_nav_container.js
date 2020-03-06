import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

import UserNav from './user_nav';

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(null, mDTP)(UserNav);