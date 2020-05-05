import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default (state = { component: null, data: null }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL: {
      const { component, data } = action;
      return { component, data };
    }
    case CLOSE_MODAL:
      return { component: null, data: null };
    default:
      return state;
  }
};