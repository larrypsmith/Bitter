import { connect } from 'react-redux';
import { signUp, removeErrors } from '../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => ({
  errors: state.errors.session,
  formType: 'Sign Up'
})

const mDTP = dispatch => ({
  processForm: user => dispatch(signUp(user)),
  removeErrors: () => dispatch(removeErrors())
})

export default connect(
  mSTP,
  mDTP
)(SessionForm)

