import { connect } from 'react-redux';
import { signUp } from '../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => ({
  errors: state.errors.session,
  formType: 'Sign Up'
})

const mDTP = dispatch => ({
  processForm: user => dispatch(signUp(user))
})

export default connect(
  mSTP,
  mDTP
)(SessionForm)
