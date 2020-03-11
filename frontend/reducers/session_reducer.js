import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullSession = {
  id: null
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { id: Object.values(action.payload.users)[0].id })
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};