import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default (state = { component: null }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return action;
    case CLOSE_MODAL:
      return { component: null };
    default:
      return state;
  }
};