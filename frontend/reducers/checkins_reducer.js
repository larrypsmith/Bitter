import { RECEIVE_USER } from '../actions/user_actions';

const checkinsReducer =  (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.payload.checkins;
    default:
      return state;
  }
}

export default checkinsReducer;