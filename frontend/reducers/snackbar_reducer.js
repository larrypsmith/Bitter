import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from '../actions/snackbar_actions';

export default (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case OPEN_SNACKBAR:
      return action.message;
    case CLOSE_SNACKBAR:
      return null;
    default:
      return state;
  }
};