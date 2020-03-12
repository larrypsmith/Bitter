import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CHECKINS } from '../actions/checkin_actions';

const checkinsReducer =  (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, action.payload.checkins);
    case RECEIVE_CHECKINS:
      return action.payload.checkins;
    default:
      return state;
  }
}

export default checkinsReducer;