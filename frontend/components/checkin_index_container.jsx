import { connect } from 'react-redux';
import { fetchCheckins } from '../actions/checkin_actions';
import CheckinIndex from './checkin_index';

const mSTP = state => ({
  checkins: state.entities.checkins
})

const mDTP = dispatch => ({
  fetchCheckins: () => dispatch(fetchCheckins())
})

export default connect(mSTP, mDTP)(CheckinIndex);