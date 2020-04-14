import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CHECKINS}  from '../actions/checkin_actions'


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, action.payload.users)
    case RECEIVE_USER:
      return Object.assign({}, state, action.payload.users )
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_CHECKINS:
      return Object.assign({}, state, action.payload.users);
    default:
      return state;
  }
}

export default usersReducer;