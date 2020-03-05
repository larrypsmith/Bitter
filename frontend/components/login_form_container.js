import { connect } from 'react-redux';
import { login, removeErrors } from '../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => ({
  errors: state.errors.session,
  formType: 'Log In'
})

const mDTP = dispatch => ({
  processForm: user => dispatch(login(user)),
  removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(SessionForm);