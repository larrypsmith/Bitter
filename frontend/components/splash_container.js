import { connect } from 'react-redux';
import Splash from './splash'
import { login } from '../actions/session_actions';


const mapDispatchToProps = dispatch => ({
  loginDemoUser: () => dispatch(login({ username: "demo", password: "password" }))
})

export default connect(null, mapDispatchToProps)(Splash)