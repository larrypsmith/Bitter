import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../actions/session_actions';

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(null, mDTP)(NavBar);