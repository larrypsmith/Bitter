import { connect } from 'react-redux';
import App from './App';

const mSTP = state => ({
  loggedIn: Boolean(state.session.id)
})

export default connect(mSTP)(App);