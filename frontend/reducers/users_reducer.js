import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, action.payload.users)
    case RECEIVE_USER:
      debugger
      return Object.assign({}, state, action.payload.users )
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
}

export default usersReducer;