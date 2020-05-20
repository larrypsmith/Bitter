import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CHECKINS, RECEIVE_CHECKIN, REMOVE_CHECKIN } from '../actions/checkin_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const checkinsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, action.payload.checkins);
    case RECEIVE_CHECKINS:
      return Object.assign({}, state, action.payload.checkins);
    case RECEIVE_CHECKIN: 
      return Object.assign({}, state, action.payload.checkins);
    case LOGOUT_CURRENT_USER:
      return {};
    case REMOVE_CHECKIN: {
      let newState = Object.assign({}, state);
      const id = (Object.keys(action.payload.checkins))[0];
      delete newState[id];
      return newState;
    }
    default:
      return state;
  }
}

export default checkinsReducer;